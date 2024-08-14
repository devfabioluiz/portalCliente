import styled from '@emotion/styled';
import { Button, IconButton } from '@mui/material';

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: `${theme.palette.primary.main}`,
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 1px 3px',
  borderRadius: '3px',
}));

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
  minWidth: '0px',
  boxShadow: !highlighted ? 'rgba(0, 0, 0, 0.24) 0px 1px 3px' : 'none',
  '&:hover': {
    backgroundColor: `${theme.palette.primary.main}`,
    color: `${theme.palette.white.main}`,
    filter: 'brightness(111%)',
  },
}));

export { StyledButton, StyledIconButton };
