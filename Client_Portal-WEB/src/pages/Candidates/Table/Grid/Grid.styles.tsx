import styled from '@emotion/styled';
import { Button, Menu, MenuItem } from '@mui/material';

const ITEM_HEIGHT = 48;

const StyledMenu = styled(Menu)(() => ({
  ul: {
    padding: 0,
  },

  '.MuiPaper-root': {
    maxHeight: ITEM_HEIGHT * 4.5,
    width: '140px',
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  padding: '8px 10.5px',
  fontSize: '14px',

  '&.delete': {
    color: theme.palette.red.main,
    backgroundColor: theme.palette.red.light,

    '&:hover': {
      backgroundColor: theme.palette.red.dark,
    },
  },
  '&.edit': {
    color: theme.palette.darkText.dark,
  },

  '&:hover': {
    fontWeight: 'bold',
  },
}));

const StyledStatusButton = styled(Button)(({ theme }) => ({
  height: '28px',
  fontWeight: 'bold',
  fontFamily: 'Helvetica, sans-serif',
  letterSpacing: '0.2px',
  boxShadow: 'none',
  background: theme.palette.mediumGrey.main,
  cursor: 'default',
  padding: '0 5px',

  ':hover': {
    boxShadow: 'none',
  },

  '&.Mui-disabled': {
    color: theme.palette.lightGrey.light,
    minWidth: '63px',
  },

  '&.ROUND_1': {
    backgroundColor: theme.palette.purple.light,
    color: theme.palette.primary.main,
  },

  '&.ROUND_2': {
    backgroundColor: theme.palette.purple.dark,
    color: theme.palette.purpleText.dark,
  },
}));

const StyledDecisionButton = styled(Button)(({ theme }) => ({
  height: '28px',
  fontWeight: 'bold',
  fontFamily: 'Helvetica, sans-serif',
  letterSpacing: '0.2px',
  boxShadow: 'none',
  padding: '0 5px',
  minWidth: '51px',

  '&.Mui-disabled': {
    color: theme.palette.lightGrey.light,
    minWidth: '63px',
  },

  ':hover': {
    boxShadow: 'none',
  },
}));

export * from 'src/components/Grid/Grid.styles';
export { StyledMenu, StyledMenuItem, StyledStatusButton, StyledDecisionButton };
