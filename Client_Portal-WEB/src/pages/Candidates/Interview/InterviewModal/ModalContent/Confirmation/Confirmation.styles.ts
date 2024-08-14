import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

const StyledConfirmContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '80%',
  margin: 'auto',
  gap: '12px',
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  fontSize: '20px',
  fontWeight: 'bold',
  color: theme.palette.primary.main,
}));

const StyledDescription = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  textAlign: 'center',
  lineHeight: '18px',

  '&.hightlight': {
    color: theme.palette.primary.main,
  },
}));

const StyledInterviewData = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 'bold',
  color: theme.palette.primary.main,
  opacity: 0.7,
}));

export {
  StyledConfirmContainer,
  StyledTitle,
  StyledDescription,
  StyledInterviewData,
};
