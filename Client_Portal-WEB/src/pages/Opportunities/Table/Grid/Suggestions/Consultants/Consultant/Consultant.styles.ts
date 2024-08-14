import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

const ConsultantContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  border: `1px solid ${theme.palette.lightGrey.main}`,
  borderRadius: '4px',
  marginBottom: '8px',
  padding: '8px 0',
  alignItems: 'space-between',
  flexDirection: 'column',
}));

const ConsultantHeaderContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

const ConsultantDataContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

const AvatarContainer = styled(Box)(({ theme }) => ({
  height: 40,
  width: 40,
  borderRadius: 20,
  backgroundColor: theme.palette.purple.main,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const ConsultantName = styled(Typography)(() => ({
  fontWeight: 'bold',
  fontSize: 12,
}));

const ConsultantTitle = styled(Typography)(({ theme }) => ({
  fontSize: 12,
  color: theme.palette.lightGrey.light,
}));

export {
  ConsultantContainer,
  ConsultantHeaderContainer,
  ConsultantDataContainer,
  AvatarContainer,
  ConsultantName,
  ConsultantTitle,
};
