import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.primary.main,
}));

const StyledTypography = styled(Typography)(() => ({
  fontWeight: 'bold',
  opacity: '0.3',
  marginRight: '0.8rem',
}));

export { StyledBox, StyledTypography };
