import styled from '@emotion/styled';
import {
  Box,
  IconButton as IconButtonMUI,
  Tooltip as TooltipMUI,
  type TooltipProps,
  Typography,
  tooltipClasses,
} from '@mui/material';

const IconButton = styled(IconButtonMUI)(() => ({
  minWidth: '28px',
  minHeight: '28px',
  fontSize: '18px',
  width: '28px',
  height: '28px',
  borderRadius: '8px',
}));

const ZoomButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.purple.light,
  color: theme.palette.purple.contrastText,
  '&:hover': {
    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), ${theme.palette.purple.light}`,
  },
}));

const PaginationButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.purple.main,
  color: theme.palette.purple.contrastText,

  '&:hover': {
    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), ${theme.palette.purple.main}`,
  },

  '&:disabled': {
    backgroundColor: theme.palette.purple.main,
    color: theme.palette.purple.contrastText,
    opacity: 0.2,
    cursor: 'default',
  },
}));

const OperationButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.purple.contrastText,
  color: 'white',
  minWidth: '36px',
  minHeight: '36px',
  width: '36px',
  height: '36px',
  fontSize: '18px',

  '&:hover': {
    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), ${theme.palette.purple.contrastText}`,
  },
}));

const Pagination = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignSelf: 'center',
  justifyItems: 'flex-end',
  '& span': {
    color: theme.palette.purple.contrastText,
  },
}));

const PdfContainer = styled(Box)(() => ({
  filter: 'drop-shadow(0px 10px 16px rgba(0, 0, 0, 0.12))',
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  width: '352px',
  height: '500px',
  backgroundColor: '#e0e0e0',
}));

const Tooltip = styled(({ className, ...props }: TooltipProps) => (
  <TooltipMUI {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 16,
    padding: '5px 10px',
  },
}));

const HeaderContainer = styled(Box)(() => ({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  marginBottom: '15px',
}));
const MainHeader = styled(Typography)(({ theme }) => ({
  color: theme.palette.purple.contrastText,
  fontSize: '24px',
  fontWeight: 700,
}));

const SubHeader = styled(Typography)(({ theme }) => ({
  color: theme.palette.purple.dark,
  fontSize: '24px',
  fontWeight: 700,
}));

const ModalBodyContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  gap: '25px',
  width: '100%',
}));

const ModalFooterContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  gap: '25px',
  width: '100%',
  margin: '15px 0',
}));

const ModalFooterCenterSection = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '352px',
}));

const PaginationContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
}));

const ZoomControllersContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
}));

const OperationControllersContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '10px',
  marginTop: '40px',
}));

export {
  HeaderContainer,
  MainHeader,
  ModalBodyContainer,
  ModalFooterCenterSection,
  ModalFooterContainer,
  OperationButton,
  OperationControllersContainer,
  Pagination,
  PaginationButton,
  PaginationContainer,
  PdfContainer,
  SubHeader,
  Tooltip,
  ZoomButton,
  ZoomControllersContainer,
};
