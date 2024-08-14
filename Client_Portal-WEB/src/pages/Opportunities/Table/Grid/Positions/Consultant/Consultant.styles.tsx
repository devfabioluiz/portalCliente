import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

import { SuggestionStatus } from 'src/api';

interface StatusProps {
  status: SuggestionStatus;
}

const ConsultantContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  border: `1px solid ${theme.palette.lightGrey.main}`,
  borderRadius: '4px',
  marginBottom: '8px',
  padding: '8px',
  alignItems: 'space-between',
  flexDirection: 'column',
}));

const StyledBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

const ConsultantInfo = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

const ConsultantStatus = styled(Box)(() => ({
  display: 'flex',
  gap: '12px',
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

const StyledStatus = styled(Box)<StatusProps>(({ theme, status }) => ({
  background:
    status === SuggestionStatus.PENDING
      ? theme.palette.purple.light
      : theme.palette.green.light,

  height: '23px',
  display: 'flex',
  padding: '0 12px',
  borderRadius: '20px',
  alignItems: 'center',
  alignSelf: 'center',
}));

const StyledTypography = styled(Typography)<StatusProps>(
  ({ status, theme }) => ({
    color:
      status === SuggestionStatus.PENDING
        ? theme.palette.purple.contrastText
        : theme.palette.green.contrastText,
    fontSize: '11px !important',
    fontWeight: 'bold',
  }),
);

export {
  ConsultantContainer,
  StyledBox,
  ConsultantInfo,
  ConsultantStatus,
  AvatarContainer,
  ConsultantName,
  ConsultantTitle,
  StyledStatus,
  StyledTypography,
};
