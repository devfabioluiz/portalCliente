import { useEffect, useState } from 'react';

import { Box, Modal } from '@mui/material';

import { type QueryClient, useQueryClient } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';

import {
  getCustomers,
  getLevels,
  getProjects,
  getRoles,
  getTechnologies,
  useOpportunities,
} from 'src/api';
import ColumnFilters from 'src/components/TopBar/ColumnFilters/ColumnFilters';
import CreateOpportunity from 'src/pages/Opportunities/TopBar/CreateOpportunity/CreateOpportunity';
import Filters from 'src/pages/Opportunities/TopBar/Filters/Filters';
import { Search } from 'src/pages/Opportunities/TopBar/Search';
import {
  AddButton,
  StyledBox,
  StyledContainer,
  StyledFiltersBox,
} from 'src/pages/Opportunities/TopBar/TopBar.styles';
import { opportunityFiltersAtom } from 'src/recoil/opportunity';

const page = 1;
const perPage = 10;
const staleTime = 1000 * 30; // 30 secs

const prefetchData = (queryClient: QueryClient): void => {
  void queryClient.prefetchQuery({
    queryKey: ['roles', { page, perPage, search: '' }],
    queryFn: async () => await getRoles({ page, perPage }),
    staleTime,
  });
  void queryClient.prefetchQuery({
    queryKey: ['customers', { page, perPage }],
    queryFn: async () => await getCustomers({ page, perPage }),
    staleTime,
  });
  void queryClient.prefetchQuery({
    queryKey: ['projects', { page, perPage }],
    queryFn: async () => await getProjects({ page, perPage }),
    staleTime,
  });
  void queryClient.prefetchQuery({
    queryKey: ['seniorities', { page, perPage }],
    queryFn: async () => await getLevels({ page, perPage }),
    staleTime,
  });
  void queryClient.prefetchQuery({
    queryKey: [
      'technologies',
      { page, perPage, filterBy: 'name', filterValue: '' },
    ],
    queryFn: async () => await getTechnologies({ page, perPage }),
    staleTime,
  });
};

const TopBar = (): React.ReactElement => {
  const queryClient = useQueryClient();
  const filters = useRecoilValue(opportunityFiltersAtom);

  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const { refetch } = useOpportunities(
    {
      page: 1,
      perPage: 10,
      search: searchValue,
    },
    filters,
  );

  const handleClose = (): void => {
    setIsOpen(false);
  };

  const handleOnAddClick = (): void => {
    setIsOpen(true);
  };

  const handleAddButtonHover = (): void => {
    prefetchData(queryClient);
  };

  useEffect(() => {
    void refetch();
  }, [searchValue, refetch]);

  return (
    <StyledContainer>
      <StyledBox>
        <StyledFiltersBox>
          <Filters />
          <ColumnFilters />
          <Search
            onSubmit={(value: string) => {
              setSearchValue(value);
            }}
          />
        </StyledFiltersBox>

        <Box>
          <AddButton
            onMouseEnter={handleAddButtonHover}
            onClick={handleOnAddClick}>
            Add
          </AddButton>
          <Modal open={isOpen} onClose={handleClose}>
            <CreateOpportunity handleClose={handleClose} />
          </Modal>
        </Box>
      </StyledBox>
    </StyledContainer>
  );
};

export default TopBar;
