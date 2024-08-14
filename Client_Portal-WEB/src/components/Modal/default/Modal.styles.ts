import styled from '@emotion/styled';
import { Box } from '@mui/material';

interface ModalContainerProps {
  width?: string;
}
const ModalContainer = styled(Box, {
  shouldForwardProp: (prop) => !['width'].includes(prop),
})<ModalContainerProps>(({ theme, width }) => ({
  display: 'flex',
  flexDirection: 'column',
  minWidth: '400px',
  width: width ?? '25%',
  maxHeight: '90%',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: theme.palette.white.main,
  borderRadius: '8px',
  padding: '12px',
}));

const HeaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  flexDirection: 'row-reverse',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export { HeaderContainer, ModalContainer };
