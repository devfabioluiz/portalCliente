import styled from '@emotion/styled';
import { PersonAddAlt1 } from '@mui/icons-material';
import { Box } from '@mui/material';

const ModalContainer = styled(Box)(() => ({
  position: 'relative',
  maxHeight: '94%',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'auto',
}));

const StyledSuggestContainer = styled(Box)(({ theme }) => ({
  border: `${theme.palette.primary.main} 2px solid`,
  color: `${theme.palette.primary.main}`,
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '4px',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'all 0.3s',
  '&:hover': {
    backgroundColor: `${theme.palette.primary.main}`,
    color: 'white',
  },
}));

const StyledPersonAddAlt1Icon = styled(PersonAddAlt1)(() => ({
  fontSize: '20px',
}));

const LoadingContainer = styled(Box)(() => ({
  position: 'absolute',
  backgroundColor: 'rgba(255,255,255,0.8)',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1,
}));

export {
  ModalContainer,
  StyledSuggestContainer,
  StyledPersonAddAlt1Icon,
  LoadingContainer,
};
