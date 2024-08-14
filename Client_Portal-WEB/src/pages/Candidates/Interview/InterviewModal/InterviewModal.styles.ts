import styled from '@emotion/styled';
import { Box, IconButton } from '@mui/material';

const ModalBodyContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '35%',
  maxWidth: '600px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: theme.palette.white.main,
  borderRadius: '4px',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',

  '&.schedule': {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '650px',
    minWidth: '570px',

    maxHeight: '700px',
    position: 'absolute',
    padding: '12px',
  },

  '&.confirmation': {
    position: 'relative',
    padding: '40px 12px',
  },
}));

const StyledIconButton = styled(IconButton)(() => ({
  position: 'absolute',
  right: '8px',
  top: '8px',
}));

export { ModalBodyContainer, StyledIconButton };
