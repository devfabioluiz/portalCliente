import styled from '@emotion/styled';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';
import { Grid, Popover } from '@mui/material';

const StyledGridContainer = styled(Grid)(({ theme }) => ({
  spacing: '4',
  flexDirection: 'row',
  fontSize: '13px',
  borderRadius: '5px',
  backgroundColor: 'white',
  margin: '1rem 0',
  display: 'flex',
  alignItems: 'center',
  color: `${theme.palette.darkText.dark}`,
}));

const StyledGridItem = styled(Grid)(() => ({
  padding: '11px 4px 11px 12px !important',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  width: '100%',
  maxW: 'calc((100% - 69px) / 14)',
}));

const StyledTechPopover = styled(Popover)(({ theme }) => ({
  borderRadius: '4px',
  fontSize: '12px',

  '.MuiPaper-root': {
    display: 'flex',
    flexDirection: 'column',
    padding: '0.8rem',
    fontSize: '12px',
    gap: '0.5rem',
  },
}));

const StyledCancelIcon = styled(CancelIcon)(({ theme }) => ({
  fontSize: '18px',
  color: `${theme.palette.darkText.light}`,
  paddingLeft: '4px',
  transition: 'color 0.3s',
  cursor: 'pointer',
  '&:hover': {
    color: `${theme.palette.darkText.dark}`,
  },
}));

const StyledAddCircleOutlineIcon = styled(AddCircleOutlineIcon)(
  ({ theme }) => ({
    fontSize: '13',
    color: `${theme.palette.darkText.light}`,
    padding: '0 4px',
    transition: 'color 0.3s',
    cursor: 'pointer',
    '&:hover': {
      color: `${theme.palette.darkText.dark}`,
    },
  }),
);

export * from 'src/components/Grid/Grid.styles';
export {
  StyledGridContainer,
  StyledGridItem,
  StyledTechPopover,
  StyledCancelIcon,
  StyledAddCircleOutlineIcon,
};
