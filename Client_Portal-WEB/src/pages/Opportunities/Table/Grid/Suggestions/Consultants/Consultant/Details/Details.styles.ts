import styled from '@emotion/styled';
import { Box, TextField } from '@mui/material';

const FormContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 10px',
  marginTop: '12px',
}));

const SalaryInput = styled(TextField)(() => ({
  width: '40%',
  paddingRight: '10px',
}));

const salaryInputPropsStyle = { fontSize: '12px', padding: '4px 8px ' };

export { FormContainer, SalaryInput, salaryInputPropsStyle };
