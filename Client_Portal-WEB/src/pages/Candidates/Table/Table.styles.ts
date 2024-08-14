import styled from '@emotion/styled';
import { TableContainer } from '@mui/material';

const StyledContainer = styled(TableContainer)(({ theme }) => ({
  display: 'flex',
  minHeight: 'calc(100vh - 110px)',
  paddingLeft: '69px',
  paddingRight: '16px',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: `${theme.palette.lightGrey.main}`,
  color: `${theme.palette.darkText.dark}`,
}));

export { StyledContainer };
