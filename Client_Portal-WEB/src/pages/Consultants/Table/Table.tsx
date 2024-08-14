import { useState } from 'react';

import { CircularProgress } from '@mui/material';

import { useGetConsultantsPaginated } from 'src/api';
import { Grid } from 'src/pages/Consultants/Table/Grid';
import { StyledContainer } from 'src/pages/Consultants/Table/Table.styles';

export const ITEMS_PER_PAGE = 10;

const Table = (): React.ReactElement => {
  const [page, setPage] = useState(0);
  const { data, isLoading } = useGetConsultantsPaginated({
    page,
    perPage: ITEMS_PER_PAGE,
  });

  return (
    <StyledContainer>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Grid paginatedQueryResult={data} setPage={setPage} />
      )}
    </StyledContainer>
  );
};

export default Table;
