import styled from '@emotion/styled';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import SearchIcon from '@mui/icons-material/Search';
import {
  Button,
  ButtonBase,
  DialogActions,
  DialogTitle,
  FilledInput,
  FormControlLabel,
  FormGroup,
  Radio,
  Typography,
} from '@mui/material';

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 700,
  color: `${theme.palette.primary.main}`,
  padding: '0 0',
  marginRight: '15px',
}));

const SubHeading = styled(Typography)(({ theme }) => ({
  fontSize: '15px',
  fontWeight: 700,
  color: `${theme.palette.primary.main}`,
  padding: '0 0',
  opacity: 0.4,
}));

const CloseButton = styled(ButtonBase)(({ theme }) => ({
  height: 'fit-content',
  width: 'fit-content',
  padding: '0 0',
  margin: '15px 15px',
  marginBottom: '0px',
  position: 'absolute',
  right: 0,
  top: 0,
  color: `${theme.palette.darkText.light}`,
}));

const CloseIcon = styled(CancelOutlinedIcon)(() => ({
  fontSize: '22px',
  transition: 'filter .3s',
  '&:hover': {
    filter: 'brightness(90%)',
  },
}));

const SearchField = styled(FilledInput)(() => ({
  height: '36px',
  margin: '15px 0 0',
  borderRadius: '5px',
  fontSize: '13px',
  paddingBottom: '15px',
  width: '100%',
}));

const StyledSearchIcon = styled(SearchIcon)(({ theme }) => ({
  position: 'relative',
  top: '8px',
  fontSize: '22px',
  color: `${theme.palette.darkText.light}`,
}));

const OptionsContainer = styled(FormGroup)(() => ({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  height: '300px',
  overflowY: 'scroll',
  '&::-webkit-scrollbar': {
    width: '0.4em',
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

const StyledControlLabel = styled(FormControlLabel)(({ theme }) => ({
  border: `solid 1px ${theme.palette.lightGrey.main}`,
  margin: '0 10px 5px 0px',
  borderRadius: '5px',
  '& .MuiFormControlLabel-label': {
    fontSize: '13px',
  },
}));

const StyledRadioButton = styled(Radio)(({ theme }) => ({
  color: `${theme.palette.darkText.light}`,
}));

const Footer = styled(DialogActions)(() => ({
  display: 'flex',
  justifyContent: 'center',
}));

const AddButton = styled(Button)(({ theme }) => ({
  position: 'relative',
  height: '36px',
  width: '222px',
  marginBottom: '5px',
  backgroundColor: `${theme.palette.primary.main}`,
  fontSize: '12px',
  color: `${theme.palette.white.main}`,
  transition: 'background-color .3s, color .3s, filter .3s',
  '&.Mui-disabled': {
    backgroundColor: `${theme.palette.primary.main}`,
    color: `${theme.palette.primary.contrastText}`,
    opacity: 0.4,
  },
  '&:hover': {
    backgroundColor: `${theme.palette.primary.main}`,
    filter: 'brightness(111%)',
  },
}));
const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  width: '400px',
}));

export {
  Heading,
  SubHeading,
  CloseButton,
  CloseIcon,
  SearchField,
  StyledSearchIcon,
  OptionsContainer,
  StyledControlLabel,
  StyledRadioButton,
  Footer,
  AddButton,
  StyledDialogTitle,
};
