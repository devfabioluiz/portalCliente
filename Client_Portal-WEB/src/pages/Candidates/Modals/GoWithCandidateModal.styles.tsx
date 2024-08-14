import styled from '@emotion/styled';
import { Box, Button, Typography, type TypographyProps } from '@mui/material';

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0px 1.5px',
  backgroundColor: `${theme.palette.white.main}`,
  borderRadius: '7px',
  flexDirection: 'column',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: `${theme.palette.white.main}`,
  color: `${theme.palette.darkText.main}`,
  width: '100%',
  margin: '3px 1.5px',
  borderRadius: '8px',
  fontWeight: 500,
  textDecoration: 'none',
  '&.active': {
    backgroundColor: `${theme.palette.primary.main}`,
    color: `${theme.palette.white.main}`,
  },
}));

const Footer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  left: 0,
  bottom: 0,
  width: '100%',
  padding: '14px 0',
  justifyContent: 'space-between',
  gap: '8px',
  button: {
    width: '100%',
    fontSize: '12px',
    fontWeight: 700,
  },
}));

const ModalBodyContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  paddingRight: '0.4rem',
  maxHeight: '83%',
  overflowY: 'scroll',
  fontFamily: 'Poppins',
  fontSize: '12px',
  fontHeight: '18px',
  textAlign: 'center',
  '&::-webkit-scrollbar': {
    width: '0.4rem',
  },
  '&::-webkit-scrollbar-track': {
    WebkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'rgba(0,0,0,.1)',
    height: '0.5rem',
    borderRadius: '50px',
  },
}));

const StyledTypography = styled(Typography)<
  TypographyProps & { component?: React.ElementType }
>(({ theme }) => ({
  fontSize: '13px',
  margin: '8px 0',
  span: {
    color: `${theme.palette.primary.main}`,
    whiteSpace: 'nowrap',
  },
}));

export {
  StyledBox,
  StyledButton,
  Footer,
  ModalBodyContainer,
  StyledTypography,
};
