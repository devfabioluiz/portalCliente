import styled from '@emotion/styled';
import { FormControl } from '@mui/material';

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',
  padding: '0px 50px',
  marginBottom: '16px',
  fontFamily: theme.typography.fontFamily,
  fontSize: '12px',
  fontWeight: 400,
}));

export { StyledFormControl };
