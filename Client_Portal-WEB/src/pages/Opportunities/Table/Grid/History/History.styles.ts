import styled from '@emotion/styled';
import { History } from '@mui/icons-material';
import { Box } from '@mui/material';

const StyledHistoryContainer = styled(Box)(({ theme }) => ({
  border: `${theme.palette.primary.main} 2px solid`,
  color: `${theme.palette.primary.main}`,
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '4px',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'all 0.3s',
  '&:hover': {
    backgroundColor: `${theme.palette.primary.main}`,
    color: 'white',
  },
}));

const StyledHistoryIcon = styled(History)(() => ({
  fontSize: '20px',
}));

export { StyledHistoryContainer, StyledHistoryIcon };
