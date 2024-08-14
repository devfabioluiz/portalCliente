import styled from '@emotion/styled';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import {
  Box,
  Button,
  ButtonBase,
  CircularProgress,
  OutlinedInput,
  Typography,
  keyframes,
} from '@mui/material';

interface FormContainerProps {
  closeAnimation: boolean;
}

const ANIMATION_DURATION = 500;

const slideRigthToLeft = keyframes`
0%{
  transform:translate(444px,0);
}
100%{
  transform:translate(0,0);
}
`;

const slideLeftToRight = keyframes`
100%{
  transform:translate(444px,0);
}
0%{
  transform:translate(0,0);
}
`;

const FormContainer = styled(Box)<FormContainerProps>(
  ({ theme, closeAnimation }) => ({
    position: 'absolute',
    top: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '444px',
    height: '100vh',
    backgroundColor: `${theme.palette.white.main}`,
    boxShadow: `0px 4px 12px rgba(0, 0, 0, 0.12)`,
    overflowY: 'scroll',
    animation: `${
      closeAnimation ? slideLeftToRight : slideRigthToLeft
    } ${ANIMATION_DURATION}ms ease-in-out`,
    transition: `all ${ANIMATION_DURATION}ms ease-in-out`,
  }),
);

const StyledBox = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'flex-end',
  alignItems: 'center',
}));

const CloseButton = styled(ButtonBase)(({ theme }) => ({
  height: 'fit-content',
  width: 'fit-content',
  padding: '0 0',
  margin: '16px 16px',
  marginBottom: '16px',
  color: `${theme.palette.darkText.light}`,
}));

const CloseIcon = styled(CancelOutlinedIcon)(() => ({
  fontSize: '22px',
  transition: 'filter .3s',
  '&:hover': {
    filter: 'brightness(90%)',
  },
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 600,
  color: `${theme.palette.primary.main}`,
  padding: '0 0',
  marginTop: '0',
  marginBottom: '16px',
}));

const StyledFormControl = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',
  padding: '0px 50px',
  margin: '16px 0',
  fontFamily: theme.typography.fontFamily,
  fontSize: '12px',
  fontWeight: 400,
}));

const StyledInput = styled(OutlinedInput)(() => ({
  height: '100%',
  width: '100%',
  fontSize: '12px',
  '&.number': {
    '& input::-webkit-outer-spin-button, input::-webkit-inner-spin-button': {
      WebkitAppearance: 'none',
      margin: 0,
    },
    '& input[type=number]': {
      MozAppearance: 'textfield',
    },
  },
}));

const DescriptionInput = styled(OutlinedInput)(() => ({
  height: '108px',
  width: '100%',
  fontSize: '12px',
}));

const SaveButton = styled(Button)(({ theme }) => ({
  height: '36px',
  width: '222px',
  backgroundColor: `${theme.palette.primary.main}`,
  fontSize: '12px',
  color: `${theme.palette.white.main}`,
  marginTop: '10px',
  marginBottom: '36px',
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

const Spinner = styled(CircularProgress)(({ theme }) => ({
  color: 'white',
}));

export {
  FormContainer,
  StyledBox,
  CloseButton,
  CloseIcon,
  Heading,
  StyledInput,
  DescriptionInput,
  SaveButton,
  Spinner,
  StyledFormControl,
  ANIMATION_DURATION,
};
