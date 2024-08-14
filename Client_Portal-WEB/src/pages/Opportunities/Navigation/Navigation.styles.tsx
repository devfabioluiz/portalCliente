import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';

const StyledContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  paddingTop: '66px',
  paddingRight: '16px',
  backgroundColor: `${theme.palette.lightGrey.main}`,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  height: '44px',
  padding: '0px 1.5px',
  marginLeft: '69px',
  backgroundColor: `${theme.palette.white.main}`,
  borderRadius: '7px',
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
  fontSize: '13px',
  fontWeight: 500,
  textDecoration: 'none',
  '&.active': {
    backgroundColor: `${theme.palette.primary.main}`,
    color: `${theme.palette.white.main}`,
  },
}));

export { StyledContainer, StyledBox, StyledButton };
