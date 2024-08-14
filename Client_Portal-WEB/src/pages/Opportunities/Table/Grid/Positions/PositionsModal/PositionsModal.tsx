import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { Box, Button } from '@mui/material';

import { useGetSuggestionInfinite } from 'src/api';
import { Modal, Search } from 'src/components';
import { Consultant } from 'src/pages/Opportunities/Table/Grid/Positions/Consultant';
import { Header } from 'src/pages/Opportunities/Table/Grid/Positions/Header';
import {
  Footer,
  ModalBodyContainer,
  PositionsContainer,
} from 'src/pages/Opportunities/Table/Grid/Positions/PositionsModal/PositionsModal.styles';

interface IProps {
  opportunityId: string;
  isOpen: boolean;
  onClose: () => void;
}

const PositionsModal = ({
  opportunityId,
  isOpen,
  onClose,
}: IProps): React.ReactElement => {
  const [searchValue, setSearchValue] = useState('');
  const { ref, inView } = useInView();

  const { data, fetchNextPage, isSuccess, hasNextPage } =
    useGetSuggestionInfinite({
      search: searchValue,
      opportunityId,
    });

  useEffect(() => {
    if (inView && (hasNextPage ?? false)) {
      void fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView]);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onModalClose={onClose}
        renderHeader={<Header occupiedSlots={data?.pages[0].totalCount} />}>
        <Box height="100%">
          <ModalBodyContainer>
            <Search
              onSubmit={(value: string) => {
                setSearchValue(value);
              }}
            />
            <PositionsContainer>
              {data?.pages.map((page) =>
                page.items.map((item) => (
                  <Consultant
                    name={item.consultant.name}
                    role={item.consultant.role?.name}
                    key={item.id}
                    {...item}
                  />
                )),
              ) ?? null}
              {/* Marker that indicates end of the list */}
              {isSuccess && <Box ref={ref} />}
            </PositionsContainer>
          </ModalBodyContainer>
          <Footer>
            <Button variant="contained" onClick={onClose}>
              Close
            </Button>
          </Footer>
        </Box>
      </Modal>
    </>
  );
};

export default PositionsModal;
