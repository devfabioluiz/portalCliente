import styled from '@emotion/styled';

const StyledLogo = styled('img')(({ theme }) => ({
  position: 'fixed',
  top: '8px',
  left: '16px',
  height: '100%',
  maxHeight: '29px',
  width: 'auto',
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create('transform', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  transformOrigin: '-35% -60%',
}));

export { StyledLogo };
