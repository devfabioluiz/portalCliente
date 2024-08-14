import styled from '@emotion/styled';
import { Box, Button, TextareaAutosize, Typography } from '@mui/material';

const StyledContainer = styled(Box)(() => ({
  width: '100%',
  minWidth: '500px',
  minHeight: '410px',
  maxHeight: '450px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.12)',
  borderRadius: '4px',
  padding: '13px 20px',
  margin: '10px 0px',
}));

const StyledTimeContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '12px',
  overflowY: 'scroll',
  paddingRight: '12px',

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

const StyledTimeButton = styled(Button)(({ theme }) => ({
  width: '130px',
  border: `1px solid ${theme.palette.purpleText.light}`,

  '&.selected': {
    backgroundColor: theme.palette.purpleText.light,
    fontWeight: 'bold',
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: '12px',
  margin: '8px 0',
}));

const StyledTextArea = styled(TextareaAutosize)(({ theme }) => ({
  width: '100%',
  height: '100%',
  resize: 'none',
  border: `1px solid ${theme.palette.mediumGrey.main}`,
  borderRadius: '4px',
  padding: '12px',
  fontFamily: 'Poppins, sans-serif',
  fontSize: '12px',
  minHeight: '68px',

  '&:focus': {
    outlineColor: theme.palette.primary.main,
  },
}));

const StyledConfirmButton = styled(Button)(({ theme }) => ({
  '&.Mui-disabled': {
    backgroundColor: theme.palette.purpleText.light,
    color: theme.palette.white.main,
    fontWeight: 'bold',
  },
}));

export {
  StyledContainer,
  StyledTimeButton,
  StyledTimeContainer,
  StyledTypography,
  StyledTextArea,
  StyledConfirmButton,
};
