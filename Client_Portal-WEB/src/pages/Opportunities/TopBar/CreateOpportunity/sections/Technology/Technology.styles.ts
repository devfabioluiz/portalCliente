import styled from '@emotion/styled';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';
import { Box, ButtonBase, FormControl, IconButton } from '@mui/material';

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',
  padding: '0px 50px',
  fontFamily: theme.typography.fontFamily,
  fontSize: '12px',
  fontWeight: 400,
}));

const StyledContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
}));

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  width: 'fit-content',
  padding: '4px 6px 4px 10px',
  borderRadius: '16px',
  backgroundColor: `${theme.palette.mediumGrey.main}`,
  marginTop: '3px',
  marginRight: '6px',
  marginBottom: '6px',
}));

const RemoveButton = styled(IconButton)(({ theme }) => ({
  color: `${theme.palette.darkText.light}`,
  '&.MuiIconButton-root': {
    padding: '0px 0px',
  },
  '&:hover': {
    filter: 'brightness(90%)',
  },
}));

const RemoveIcon = styled(CancelIcon)(() => ({
  fontSize: '15px',
}));

const StyledButton = styled(ButtonBase)(({ theme }) => ({
  marginTop: '8px',
  marginBottom: '16px',
  fontSize: '12px',
  color: `${theme.palette.darkText.light}`,
  '&:hover': {
    filter: 'brightness(90%)',
  },
  '&.optionSelected': {
    margin: 0,
    paddingBottom: '2.2px',
  },
}));

const AddIcon = styled(AddCircleOutlineIcon)(() => ({
  marginRight: '16px',
  fontSize: '15px',
}));

export {
  StyledFormControl,
  StyledContainer,
  StyledBox,
  RemoveButton,
  RemoveIcon,
  StyledButton,
  AddIcon,
};
