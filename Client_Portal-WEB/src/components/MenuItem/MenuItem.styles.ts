import styled from '@emotion/styled';
import { ListItemButton, ListItemText } from '@mui/material';

const MenuItemBtn = styled(ListItemButton)(
  ({ theme }) => `
  padding: 15px;
  column-gap: 16px;
  color: ${theme.palette.primary.main};

  img,
  svg {
    font-size: 24px
  }

  &.Mui-selected, &:hover {
    color: #fff;
    background-color: ${theme.palette.primary.main};

    span{
      color: #fff
    }

    img{
      filter: brightness(0) invert(1);
    }
  }
`,
);

const MenuText = styled(ListItemText)(
  ({ theme }) => `
  margin: 0;

  span{
    color: ${theme.palette.darkText.dark};
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    font-family: 'Helvetica';
}
`,
);

export { MenuItemBtn, MenuText };
