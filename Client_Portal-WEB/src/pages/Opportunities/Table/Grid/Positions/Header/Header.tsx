import { type ReactElement } from 'react';

import { Typography } from '@mui/material';

import {
  StyledBox,
  StyledTypography,
} from 'src/pages/Opportunities/Table/Grid/Positions/Header/Header.style';

interface IProps {
  occupiedSlots?: number;
}

const Header = ({ occupiedSlots = 0 }: IProps): ReactElement => {
  return (
    <StyledBox>
      <Typography fontWeight="bold" pr={2}>
        Positions
      </Typography>
      <StyledTypography fontWeight="bold">
        {occupiedSlots} Slots
      </StyledTypography>
    </StyledBox>
  );
};

export default Header;
