import styled from '@emotion/styled';
import { Box, Button, FormControlLabel } from '@mui/material';

interface StyledButtonProps {
  highlighted: boolean;
}

const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => !['highlighted'].includes(prop),
})<StyledButtonProps>(({ theme, highlighted }) => ({
  fontFamily: 'Helvetica',
  backgroundColor: highlighted
    ? `${theme.palette.primary.main}`
    : `${theme.palette.white.main}`,
  color: highlighted
    ? `${theme.palette.white.main}`
    : `${theme.palette.primary.main}`,
  fontSize: '12px',
  transition: 'filter .3s',
  margin: 0,
  marginLeft: '8px',
  minWidth: '0px',
  boxShadow: !highlighted ? 'rgba(0, 0, 0, 0.24) 0px 1px 3px' : 'none',
  '&:hover': {
    backgroundColor: `${theme.palette.primary.main}`,
    color: `${theme.palette.white.main}`,
    filter: 'brightness(111%)',
  },
}));

const StyledBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '6px 0px 6px 16px',
}));

const StyledFormControlLabel = styled(FormControlLabel)(() => ({
  '&.hidden': {
    display: 'none',
  },
}));

export { StyledButton, StyledBox, StyledFormControlLabel };
