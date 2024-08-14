import styled from '@emotion/styled';
import { Box } from '@mui/material';

const ModalBodyContainer = styled(Box)(() => ({
  height: '86%',
}));

const PositionsContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  marginTop: '12px',
  paddingRight: '0.4rem',
  maxHeight: '83%',
  overflowY: 'scroll',
  p: { fontSize: '13px' },
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
  padding: '10px',
  justifyContent: 'space-between',

  button: {
    width: '100%',
  },
}));

export { ModalBodyContainer, PositionsContainer, Footer };
