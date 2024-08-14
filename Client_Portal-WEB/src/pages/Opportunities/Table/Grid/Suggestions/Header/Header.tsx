import { type ReactElement } from 'react';

import { Typography } from '@mui/material';

import { useRecoilValue } from 'recoil';

import {
  StyledBox,
  StyledTypography,
} from 'src/pages/Opportunities/Table/Grid/Suggestions/Header/Header.styles';
import { suggestionsAtomLength } from 'src/recoil/suggestions';

const Header = (): ReactElement => {
  const selectedConsultantsLength = useRecoilValue(suggestionsAtomLength);

  const isAnyoneSelected = selectedConsultantsLength > 0;

  return (
    <StyledBox>
      <Typography fontWeight={'bold'} pr={2}>
        Suggest consultants
      </Typography>
      <StyledTypography
        fontWeight={'bold'}
        {...(isAnyoneSelected && { className: 'selected' })}>
        {selectedConsultantsLength} selected
      </StyledTypography>
    </StyledBox>
  );
};

export default Header;
