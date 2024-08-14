import styled from '@emotion/styled';
import { Box, Link, Typography } from '@mui/material';

const StyledContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  marginTop: '14px',
  marginBottom: '4px',
}));

const StyledDetail = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '10px',
}));

const StyledTypography = styled(Typography)(() => ({
  fontWeight: 'bold',
  width: '30px',
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.darkText.main,
  textDecoration: 'none',
  fontSize: '13px',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

export { StyledContainer, StyledDetail, StyledTypography, StyledLink };
