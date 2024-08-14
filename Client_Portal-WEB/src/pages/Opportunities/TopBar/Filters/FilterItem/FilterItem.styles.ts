import styled from '@emotion/styled';
import { Box, IconButton, List, ListItem, ListItemAvatar } from '@mui/material';

const StyledList = styled(List)(({ theme }) => ({}));

const StyledBox = styled(Box)(({ theme }) => ({
  minWidth: '250px',
  maxHeight: '300px',
  overflowY: 'scroll',
  '&::-webkit-scrollbar': {
    width: '0.4em',
  },
  '&::-webkit-scrollbar-track': {
    WebkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'rgba(0,0,0,.1)',
    height: '0.5rem',
    borderRadius: '50px',
  },
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: '0 10px',
  '&:hover': {
    backgroundColor: `${theme.palette.lightGrey.main}`,
  },
}));

const StyledListItemAvatar = styled(ListItemAvatar)(({ theme }) => ({
  minWidth: 0,
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  padding: 0,
  borderRadius: '5px',
  color: `${theme.palette.primary.main}`,
  '&:hover': {
    backgroundColor: `${theme.palette.primary.light}44`,
  },
}));

export {
  StyledList,
  StyledBox,
  StyledListItem,
  StyledListItemAvatar,
  StyledIconButton,
};
