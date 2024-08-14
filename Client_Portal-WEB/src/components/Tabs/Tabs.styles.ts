import styled from '@emotion/styled';
import { Box, Tab, Tabs } from '@mui/material';

import theme from 'src/theme';

const StyledBox = styled(Box)(
  ({ theme }) => `
  width: 100%;
  background-color: ${theme.palette.white.main};
  border-radius: 4px;
`,
);

const StyledTabs = styled(Tabs)`
  width: 100%;

  .MuiTabs-flexContainer {
    gap: 4px;
  }

  .MuiTabs-indicator {
    display: none;
  }
`;

const gradient = `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`;

const StyledLinkTab = styled(Tab)(({ theme }) => ({
  flexGrow: 1,
  borderRadius: '4px',
  fontFamily: 'Poppins, sans-serif',
  lineHeight: '18px',
  background: theme.palette.white.main,
  '&.Mui-selected': {
    background: gradient,
    color: theme.palette.white.main,
    borderBottom: 'none',
    fontWeight: 700,
  },
  '&:hover': {
    background: gradient,
    opacity: '0.9',
    color: theme.palette.white.main,
  },
}));

export { StyledBox, StyledTabs, StyledLinkTab };
