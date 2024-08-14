import styled from '@emotion/styled';
import { Box, Grid, Typography } from '@mui/material';

const Container = styled(Box)(() => ({ width: '100%', height: '40px' }));

const Title = styled(Typography)(() => ({
  fontSize: '12px',
  fontWeight: 'bold',
}));

const MandatoryMarkContainer = styled(Grid)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const MandatoryMark = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.mediumGrey.main,
  borderRadius: '20px',
  padding: '5px 12px',
  fontSize: '8px',
  textAlign: 'center',
}));

const Placeholder = styled(Typography)(({ theme }) => ({
  fontSize: '12px',
  color: theme.palette.text.secondary,
}));

export { Title, MandatoryMark, MandatoryMarkContainer, Placeholder, Container };
