import { useState } from 'react';

import { CircularProgress } from '@mui/material';

import { HiringStatus } from 'src/api/candidates';
import { useCandidates } from 'src/api/candidates/candidates';
import { Grid } from 'src/pages/Candidates/Table/Grid';
import { StyledContainer } from 'src/pages/Candidates/Table/Table.styles';

export const ITEMS_PER_PAGE = 10;

const Table = (): React.ReactElement => {
  // This table is only meant to show the candidates that still don't have a decision made
  const pendingStatus = [
    HiringStatus.WAITING,
    HiringStatus.ROUND_1,
    HiringStatus.ROUND_2,
  ];

  const [page, setPage] = useState(0);
  const { data, isLoading } = useCandidates(
    { page, perPage: ITEMS_PER_PAGE },
    pendingStatus,
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
