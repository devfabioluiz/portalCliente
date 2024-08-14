import styled from '@emotion/styled';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PushPinIcon from '@mui/icons-material/PushPin';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import {
  Box,
  Button,
  IconButton,
  Popover,
  Tooltip,
  type TooltipProps,
  Typography,
  tooltipClasses,
} from '@mui/material';

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    padding: '4px 4px',
    backgroundColor: `${theme.palette.white.main}`,
    fontSize: '11px',
    color: `${theme.palette.darkText.dark}`,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
}));

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0px 1.5px',
  backgroundColor: `${theme.palette.white.main}`,
  borderRadius: '7px',
  flexDirection: 'column',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: `${theme.palette.white.main}`,
  color: `${theme.palette.darkText.main}`,
  width: '100%',
  margin: '3px 1.5px',
  borderRadius: '6px',
  fontWeight: 500,
  textDecoration: 'none',
  '&.active': {
    backgroundColor: `${theme.palette.primary.main}`,
    color: `${theme.palette.white.main}`,
  },
}));

const StyledPushPinIcon = styled(PushPinIcon)(({ theme }) => ({
  color: `${theme.palette.primary.main}`,
  transform: 'rotate(-45deg)',
  transition: 'color 0.3s',
  cursor: 'pointer',
  '&:hover': {
    color: `${theme.palette.mediumGrey.main}`,
  },
}));

const StyledPushPinOutlinedIcon = styled(PushPinOutlinedIcon)(({ theme }) => ({
  color: `${theme.palette.mediumGrey.main}`,
  transform: 'rotate(-45deg)',
  cursor: 'pointer',
  transition: 'color 0.3s',
  '&:hover': {
    color: `${theme.palette.primary.main}`,
  },
}));

const StyledSecondaryTag = styled(Box)(({ theme }) => ({
  backgroundColor: `${theme.palette.lightGrey.main}`,
  color: `${theme.palette.darkText.main}`,
  width: 'fit-content',
  padding: '4px 8px',
  borderRadius: '10px',
}));

const StyledDate = styled(Box)(({ theme }) => ({
  backgroundColor: `${theme.palette.lightGrey.main}`,
  padding: '4px 6px',
  borderRadius: '4px',
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: `${theme.palette.lightGrey.dark}`,
  },
}));

const StyledDatePopover = styled(Popover)(() => ({
  padding: '4px 6px',
  borderRadius: '4px',
  fontSize: '13px',
}));

const StyledTag = styled(Box)(({ theme }) => ({
  backgroundColor: `${theme.palette.purpleText.light}`,
  width: 'fit-content',
  padding: '4px 6px',
  borderRadius: '4px',
}));

const StyledIconContainer = styled(Button)(({ theme }) => ({
  padding: '4px 2px 2px 5px',
  color: `${theme.palette.primary.main}`,
  borderRadius: '4px',
  border: `solid 2px ${theme.palette.primary.main}`,
  transition: 'background-color .3s',
  minWidth: '30px',
  '& img': {
    height: '20px',
    width: '20px',
    transition: 'filter .3s',
  },
  '&:hover': {
    backgroundColor: `${theme.palette.primary.main}`,
    '& img': {
      filter: 'brightness(300%) saturate(0%)',
    },
  },
}));

const OptionsButton = styled(IconButton)(({ theme }) => ({
  opacity: '60%',
  transition: 'opacity .3s, background-color .3s',
  '&:hover': {
    opacity: '100%',
    backgroundColor: `${theme.palette.mediumGrey.main}`,
  },
  '&.focus': {
    opacity: '100%',
    backgroundColor: `${theme.palette.mediumGrey.main}`,
  },
  '&.MuiIconButton-root': {
    padding: '1px 1px',
    borderRadius: '3px',
  },
}));

const OptionsIcon = styled(MoreVertIcon)(({ theme }) => ({
  fontSize: '24px',
  color: `${theme.palette.darkText.dark}`,
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  color: `${theme.palette.primary.main}`,
  fontWeight: 600,
  width: 'fit-content',
}));

const Footer = styled(Box)(() => ({
  left: 0,
  bottom: 0,
  width: '100%',
  display: 'flex',
  padding: '10px 24px ',
  justifyContent: 'space-between',

  button: {
    width: '100%',
  },
}));

const ModalBodyContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  marginTop: '12px',
  paddingRight: '0.4rem',
  maxHeight: '83%',
  overflowY: 'scroll',
  p: { fontSize: '13px' },
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

const TechLabel = styled(Typography)(({ theme }) => ({
  border: `solid 1px ${theme.palette.lightGrey.main}`,
  marginBottom: '5px',
  padding: '10px',
  borderRadius: '5px',
  fontSize: '13px',
}));

const StyledViewMoreTech = styled(IconButton)(({ theme }) => ({
  width: '24px',
  height: '24px',
  borderRadius: '4px',
  backgroundColor: `${theme.palette.lightGrey.main}`,
  svg: {
    fontSize: '14px',
  },
}));

const StyledRoleTechContainer = styled(Box)(({ theme }) => ({
  padding: '4px 10px',
  width: 'fit-content',
  backgroundColor: `${theme.palette.lightGrey.main}`,
  borderRadius: '20px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
}));

export {
  StyledBox,
  StyledTooltip,
  StyledTag,
  StyledButton,
  StyledPushPinIcon,
  StyledViewMoreTech,
  StyledPushPinOutlinedIcon,
  StyledRoleTechContainer,
  StyledSecondaryTag,
  StyledDate,
  StyledDatePopover,
  StyledIconContainer,
  OptionsButton,
  OptionsIcon,
  Heading,
  Footer,
  TechLabel,
  ModalBodyContainer,
};
