import { Box } from '@mui/material';

import ColumnFilters from 'src/components/TopBar/ColumnFilters/ColumnFilters';
import {
  StyledBox,
  StyledContainer,
} from 'src/pages/Consultants/TopBar/TopBar.styles';

const TopBar = (): React.ReactElement => (
  <StyledContainer>
    <StyledBox>
      <Box justifySelf="flex-start" alignSelf="center" marginLeft="16px">
        <ColumnFilters />
      </Box>
    </StyledBox>
  </StyledContainer>
);

export default TopBar;
