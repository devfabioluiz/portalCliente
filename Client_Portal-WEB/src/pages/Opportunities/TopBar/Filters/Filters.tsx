import { useMemo, useRef, useState } from 'react';

import { FilterList } from '@mui/icons-material';
import { List, Popover, Typography } from '@mui/material';

import { useRecoilValue } from 'recoil';

import {
  useCustomers,
  useOpportunities,
  useProjects,
  useRoles,
  useTechnologies,
} from 'src/api';
import { UserRole } from 'src/api/shared/User.types';
import FilterItem from 'src/pages/Opportunities/TopBar/Filters/FilterItem/FilterItem';
import { StyledButton } from 'src/pages/Opportunities/TopBar/Filters/Filters.styles';
import SliderFilter from 'src/pages/Opportunities/TopBar/Filters/SliderFilter/SliderFilter';
import { opportunityFiltersAtom } from 'src/recoil/opportunity';
import { userAtomRole } from 'src/recoil/user/user.selectors';

const Filters = (): React.ReactElement => {
  const userRole = useRecoilValue(userAtomRole);
  const filters = useRecoilValue(opportunityFiltersAtom);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const filterButtonRef = useRef<HTMLButtonElement | null>(null);
  const { refetch } = useOpportunities({ page: 1, perPage: 10 }, filters);

  const showCustomers = userRole !== UserRole.CLIENT;

  const projects = useProjects();
  const customers = useCustomers({ enabled: showCustomers });
  const roles = useRoles();
  const technologies = useTechnologies();

  const handleClick = (_event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(filterButtonRef?.current);
  };

  const isOpen = Boolean(anchorEl);
  const id = isOpen ? 'simple-popover' : undefined;

  const numberOfSelectedFilters = useMemo(
    () =>
      Object.values(filters).filter((value: string[]) => value.length !== 0)
        .length,
    [filters],
  );

  const isHighlighted = isOpen || numberOfSelectedFilters !== 0;

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <>
      <StyledButton
        highlighted={isHighlighted}
        aria-label="filter"
        aria-describedby={id}
        ref={filterButtonRef}
        onClick={handleClick}>
        {isHighlighted && (
          <Typography marginRight="3px">{numberOfSelectedFilters}</Typography>
        )}
        <FilterList />
      </StyledButton>
      <Popover
        id={id}
        open={isOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        sx={{ marginTop: '10px' }}>
        <List sx={{ minWidth: '250px' }}>
          <FilterItem
            label="Project"
            stateKey="projectIds"
            data={projects.data}
            onClick={refetch}
          />
          {showCustomers && (
            <FilterItem
              label="Client"
              stateKey="customerIds"
              data={customers.data}
              onClick={refetch}
            />
          )}
          <FilterItem
            label="Role"
            stateKey="roleIds"
            data={roles.data}
            onClick={refetch}
          />
          <FilterItem
            label="Technology"
            stateKey="technologyIds"
            data={technologies.data}
            onClick={refetch}
          />
          <SliderFilter
            stateKey1="minFee"
            stateKey2="maxFee"
            label="Fee"
            onChange={refetch}
          />
        </List>
      </Popover>
    </>
  );
};

export default Filters;
