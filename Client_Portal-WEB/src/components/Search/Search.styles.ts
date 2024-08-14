import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const FormContainer = styled(Box)(({ theme }) => ({
  marginTop: '8px',
  backgroundColor: theme.palette.lightGrey.main,
  borderRadius: 2,
  padding: '5px 14px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));
