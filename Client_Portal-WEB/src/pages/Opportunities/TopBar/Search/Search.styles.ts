import styled from '@emotion/styled';
import { Search } from '@mui/icons-material';
import { Box, InputBase } from '@mui/material';

const FormContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.lightGrey.main,
  borderRadius: 4,
  padding: '5px 14px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const StyledInput = styled(InputBase)(() => ({
  fontSize: '12px',
  flex: 1,
}));

const StyldeSearchIcon = styled(Search)(({ theme }) => ({
  padding: 0,
  color: theme.palette.lightGrey.light,
}));

export { FormContainer, StyledInput, StyldeSearchIcon };
