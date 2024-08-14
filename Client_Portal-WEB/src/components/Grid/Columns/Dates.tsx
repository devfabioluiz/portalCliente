import type * as React from 'react';
import { useState } from 'react';

import { Typography } from '@mui/material';

import dayjs from 'dayjs';

import {
  StyledDate,
  StyledDatePopover,
} from 'src/pages/Consultants/Table/Grid/Grid.styles';

interface IProps {
  openDate: string;
}

const Dates = ({ openDate }: IProps): React.ReactElement => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const isOpen = Boolean(anchorEl);

  const daysAgo = dayjs().diff(dayjs(openDate), 'days');
  const outputDate = dayjs(openDate).format('DD/MM/YYYY');

  return (
    <>
      <StyledDate
        aria-owns={isOpen ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={(event: React.MouseEvent<HTMLElement>) => {
          setAnchorEl(event.currentTarget);
        }}
        onMouseLeave={() => {
          setAnchorEl(null);
        }}>
        {daysAgo} days
      </StyledDate>
      <StyledDatePopover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={isOpen}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        disableRestoreFocus>
        <Typography sx={{ p: 1 }}>{outputDate}</Typography>
      </StyledDatePopover>
    </>
  );
};

export default Dates;
