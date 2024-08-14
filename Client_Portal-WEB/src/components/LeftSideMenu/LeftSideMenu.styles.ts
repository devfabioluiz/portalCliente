import { type CSSObject } from '@emotion/react';
import styled from '@emotion/styled';
import { Drawer, List, type Theme } from '@mui/material';

const MenuList = styled(List)`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 78px;
`;

const drawerWidth = 180;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: 'calc(22px + (2 * 15px))',
});

const StyledDrawer = styled(Drawer)(({ theme, open }) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  '.MuiDrawer-paper': {
    boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.12)',
    borderRight: 'none',
    top: '48px',
  },
  ...((open as boolean) && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!(open as boolean) && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export { MenuList, StyledDrawer };
