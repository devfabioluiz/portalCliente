import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.primary.main,
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  opacity: '0.3',
  '&.selected': {
    opacity: 1,
  },
}));

export { StyledBox, StyledTypography };
