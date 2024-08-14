import styled from '@emotion/styled';
import { AppBar, IconButton, Menu, Toolbar } from '@mui/material';

const StyledBar = styled(AppBar)`
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);
  height: 48px;
`;

const StyledToolBar = styled(Toolbar)`
  height: 48px;
  min-height: 48px !important;
  padding: 8px 16px !important;
  justify-content: flex-end;
`;

const StyledImg = styled('img')`
  width: auto;
  height: 100%;
`;

const StyledButton = styled(IconButton)(
  ({ theme }) => `
  background-color: ${theme.palette.lightGrey.dark};
  height: 32px;
  width: 32px;

  svg {
    font-size: 22px
  }
`,
);

const StyledMenu = styled(Menu)(
  ({ theme }) =>
    `
  box-shadow: 0px 12px 12px rgba(0, 0, 0, 0.12);

  .MuiMenu-list {
    width: 250px;
    padding: 0;

    > :first-of-type {
      border-radius: 5px 5px 0 0;
    }

    > :last-child {
      border-radius: 0 0 5px 5px;
    }

    .MuiListItemButton-root {
      padding: 15px 28px;
      border-radius: inherit;

      svg {
        font-size: 22px;
      }
    }
  }
`,
);

export { StyledBar, StyledToolBar, StyledImg, StyledButton, StyledMenu };
