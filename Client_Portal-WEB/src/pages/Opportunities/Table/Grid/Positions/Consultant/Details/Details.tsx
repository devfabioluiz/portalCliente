import { type ReactElement } from 'react';

import { Typography } from '@mui/material';

import { downloadFile, getFileName } from 'src/helpers';
import {
  StyledContainer,
  StyledDetail,
  StyledLink,
  StyledTypography,
} from 'src/pages/Opportunities/Table/Grid/Positions/Consultant/Details/Details.styles';

interface Props {
  salary: number;
  cvFileUrl: string | null;
  testResultFileUrl: string | null;
}

const ConsultantDetails = (props: Props): ReactElement => {
  const { salary, cvFileUrl, testResultFileUrl } = props;

  return (
    <StyledContainer>
      <StyledDetail>
        <StyledTypography fontWeight="bold">Fee</StyledTypography>
        <Typography>{salary}</Typography>
      </StyledDetail>

      {cvFileUrl != null && (
        <StyledDetail>
          <StyledTypography fontWeight="bold">CV</StyledTypography>
          <StyledLink
            onClick={() => {
              downloadFile(cvFileUrl);
            }}>
            {getFileName(cvFileUrl)}
          </StyledLink>
        </StyledDetail>
      )}

      {testResultFileUrl != null && (
        <StyledDetail>
          <StyledTypography fontWeight="bold">Test</StyledTypography>
          <StyledLink
            onClick={() => {
              downloadFile(testResultFileUrl);
            }}>
            {getFileName(testResultFileUrl)}
          </StyledLink>
        </StyledDetail>
      )}
    </StyledContainer>
  );
};

export default ConsultantDetails;
