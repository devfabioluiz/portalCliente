import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';

const ConsultantsContainer = styled(Box)(() => ({
  maxHeight: '86%',
  overflow: 'auto',
  marginTop: '8px',
  marginBottom: '8px',
}));

const SubmitButton = styled(Button)(({ theme, disabled }) => ({
  backgroundColor: theme.palette.primary.main,
  width: '100%',
  opacity: disabled ?? false ? 0.5 : 1,
  color: theme.palette.white.main,
  '&:hover': {
    opacity: 0.8,
    backgroundColor: theme.palette.primary.main,
  },
}));

export { ConsultantsContainer, SubmitButton };
