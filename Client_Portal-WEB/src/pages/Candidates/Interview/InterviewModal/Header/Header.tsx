import { type ReactElement } from 'react';

import { Typography } from '@mui/material';

import {
  StyledBox,
  StyledTypography,
} from 'src/pages/Candidates/Interview/InterviewModal/Header/Header.styles';

interface IProps {
  date: string;
  time: string | undefined;
}

const Header = ({ date, time }: IProps): ReactElement => {
  return (
    <StyledBox>
      <Typography fontWeight="bold" pr={2}>
        Selected Date & Time
      </Typography>
      <StyledTypography fontWeight="bold">{date}</StyledTypography>
      <StyledTypography fontWeight="bold">{time}</StyledTypography>
    </StyledBox>
  );
};

export default Header;
