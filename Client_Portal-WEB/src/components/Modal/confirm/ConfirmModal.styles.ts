import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

const Heading = styled(Typography)(({ theme }) => ({
  display: 'flex',
  fontSize: '24px',
  color: `${theme.palette.darkText.dark}`,
  fontWeight: 600,
  width: '100%',
  justifyContent: 'center',
  marginTop: '12px',
}));
const HeaderContainer = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
  flexDirection: 'row-reverse',
  justifyContent: 'space-between',
  alignItems: 'center',
  button: {
    position: 'absolute',
    top: '12px',
    right: '12px',
  },
}));

const ModalContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minWidth: '400px',
  width: '25%',
  maxHeight: '90%',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: theme.palette.white.main,
  borderRadius: '8px',
  padding: '12px',
  '.MuiBox-root': {
    width: '100%',
    textAlign: 'center',
  },
}));

const ModalBodyContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  marginTop: '6px',
  paddingRight: '0.4rem',
  maxHeight: '83%',
  overflowY: 'scroll',
  em: {
    color: `${theme.palette.primary.main}`,
    fontStyle: 'normal',
  },
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

const Footer = styled(Box)(() => ({
  left: 0,
  bottom: 0,
  width: '100%',
  display: 'flex',
  padding: '24px ',
  justifyContent: 'space-between',

  button: {
    width: '100%',
    margin: '8px',
  },
}));

export { HeaderContainer, Heading, ModalContainer, ModalBodyContainer, Footer };
