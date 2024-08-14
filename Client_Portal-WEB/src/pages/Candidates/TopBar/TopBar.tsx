import { Box } from '@mui/material';

import ColumnFilters from 'src/components/TopBar/ColumnFilters/ColumnFilters';
import {
  StyledBox,
  StyledContainer,
} from 'src/pages/Candidates/TopBar/TopBar.styles';

const TopBar = (): React.ReactElement => {
  return (
    <StyledContainer>
      <StyledBox>
        <Box justifySelf="flex-start" alignSelf="center" marginLeft="16px">
          <ColumnFilters />
        </Box>
      </StyledBox>
    </StyledContainer>
  );
};

export default TopBar;
