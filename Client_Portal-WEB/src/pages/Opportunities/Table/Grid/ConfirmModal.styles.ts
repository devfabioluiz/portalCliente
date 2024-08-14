import styled from '@emotion/styled';
import { Typography } from '@mui/material';

const Heading = styled(Typography)(({ theme }) => ({
  display: 'flex',
  fontSize: '24px',
  color: `${theme.palette.darkText.dark}`,
  fontWeight: 600,
  width: '100%',
  justifyContent: 'center',
  marginTop: '12px',
}));

export { Heading };
