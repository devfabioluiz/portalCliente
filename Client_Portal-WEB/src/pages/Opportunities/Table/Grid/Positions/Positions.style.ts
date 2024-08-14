import styled from '@emotion/styled';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import { Box, Typography } from '@mui/material';

const StyledBrightness1IconRed = styled(Brightness1Icon)(({ theme }) => ({
  fontSize: '20px',
  color: `${theme.palette.red.main}`,
  padding: '0 4px',
}));

const StyledBrightness1IconGreen = styled(Brightness1Icon)(({ theme }) => ({
  fontSize: '20px',
  color: `${theme.palette.green.main}`,
  padding: '0 4px',
}));

const StyledBrightness1IconOrange = styled(Brightness1Icon)(({ theme }) => ({
  fontSize: '20px',
  color: `${theme.palette.orange.main}`,
  padding: '0 4px',
}));

const StyledRequestedPositionsContainer = styled(Box)(({ theme }) => ({
  border: `${theme.palette.primary.main} 2px solid`,
  color: `${theme.palette.primary.main}`,
  borderRadius: '5px',
  display: 'flex',
  gap: '4px',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '4px 6px',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'all 0.3s',
  '&:hover': {
    backgroundColor: `${theme.palette.primary.main}`,
    color: 'white',
  },
  svg: {
    fontSize: '12px',
    padding: 0,
  },
}));

const StyledPositionNumber = styled(Typography)(({ theme }) => ({
  fontFamily: 'Helvetica',
  fontSize: '12px',
  fontWeight: 700,
}));

export {
  StyledBrightness1IconRed,
  StyledBrightness1IconGreen,
  StyledBrightness1IconOrange,
  StyledRequestedPositionsContainer,
  StyledPositionNumber,
};
