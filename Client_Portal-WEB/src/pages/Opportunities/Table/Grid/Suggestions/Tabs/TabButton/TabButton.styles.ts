import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  flex: 1,
  backgroundColor: theme.palette.purple.main,
  '&.active': {
    backgroundColor: theme.palette.white.main,
  },
}));
