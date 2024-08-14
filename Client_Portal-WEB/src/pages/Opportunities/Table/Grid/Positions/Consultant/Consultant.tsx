import { type ReactElement, useState } from 'react';

import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';

import { SuggestionStatus } from 'src/api';
import {
  AvatarContainer,
  ConsultantContainer,
  ConsultantInfo,
  ConsultantName,
  ConsultantStatus,
  ConsultantTitle,
  StyledBox,
  StyledStatus,
  StyledTypography,
} from 'src/pages/Opportunities/Table/Grid/Positions/Consultant/Consultant.styles';
import { ConsultantDetails } from 'src/pages/Opportunities/Table/Grid/Positions/Consultant/Details';

interface IProps {
  id: string;
  name: string;
  role?: string;
  status: SuggestionStatus;
  salary: number;
  cvFileUrl: string | null;
  testResultFileUrl: string | null;
}

const Consultant = (props: IProps): ReactElement => {
  const { id, name, role, status, ...details } = props;
  const [isShowDetails, setIsShowDetails] = useState(false);

  const [userName, lastName] = name.split(' ');
  const userInitials = `${userName[0]}${lastName[0] || ''}`;

  return (
    <ConsultantContainer key={id}>
      <StyledBox>
        <ConsultantInfo>
          <AvatarContainer>
            <Typography>{userInitials}</Typography>
          </AvatarContainer>
          <Box ml={1}>
            <ConsultantName>{name}</ConsultantName>
            <ConsultantTitle>{role}</ConsultantTitle>
          </Box>
        </ConsultantInfo>
        <ConsultantStatus>
          <StyledStatus status={status}>
            <StyledTypography status={status}>
              {status === SuggestionStatus.PENDING ? 'Ongoing' : 'Hired'}
            </StyledTypography>
          </StyledStatus>

          <IconButton
            onClick={() => {
              setIsShowDetails(!isShowDetails);
            }}>
            {isShowDetails ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </ConsultantStatus>
      </StyledBox>

      {isShowDetails && <ConsultantDetails {...details} />}
    </ConsultantContainer>
  );
};

export default Consultant;
