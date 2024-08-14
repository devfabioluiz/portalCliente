import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';

const StyledContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundColor: `${theme.palette.lightGrey.main}`,
  marginBottom: '13px',
}));

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  height: '44px',
  backgroundColor: `${theme.palette.white.main}`,
  outline: `solid 2px ${theme.palette.mediumGrey.light}`,
  borderRadius: '7px',
}));

const StyledFiltersBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '44px',
  backgroundColor: `${theme.palette.white.main}`,
  marginLeft: '14px',
  gap: '8px',
}));

const AddButton = styled(Button)(({ theme }) => ({
  backgroundColor: `${theme.palette.primary.main}`,
  color: `${theme.palette.white.main}`,
  fontSize: '12px',
  margin: '6px 16px',
  transition: 'filter .3s',
  '&:hover': {
    backgroundColor: `${theme.palette.primary.main}`,
    filter: 'brightness(111%)',
  },
}));

export { StyledContainer, StyledBox, StyledFiltersBox, AddButton };
