import { useState } from 'react';

import { CircularProgress } from '@mui/material';

import { useRecoilValue } from 'recoil';

import { useOpportunities } from 'src/api';
import { Grid } from 'src/pages/Opportunities/Table/Grid';
import { StyledContainer } from 'src/pages/Opportunities/Table/Table.styles';
import { opportunityFiltersAtom } from 'src/recoil/opportunity';

export const ITEMS_PER_PAGE = 10;

const Table = (): React.ReactElement => {
  const filters = useRecoilValue(opportunityFiltersAtom);
  const [page, setPage] = useState(0);
  const { data, isLoading } = useOpportunities(
    { page, perPage: ITEMS_PER_PAGE },
    filters,
  );

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
