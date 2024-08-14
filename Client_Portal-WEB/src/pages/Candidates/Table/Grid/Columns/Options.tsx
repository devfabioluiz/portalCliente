import { type MouseEvent, useState } from 'react';

import { IconButton } from '@mui/material';

import { HiringStatus, useUpdateCandidate } from 'src/api/candidates';
import {
  OptionsIcon,
  StyledMenu,
  StyledMenuItem,
} from 'src/pages/Candidates/Table/Grid/Grid.styles';

interface Props {
  candidateId: string;
}

const Options = ({ candidateId }: Props): React.ReactElement => {
  const { mutateAsync } = useUpdateCandidate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const onNoGoClick = async (): Promise<void> => {
    await mutateAsync(
      {
        candidateId,
        status: HiringStatus.NO_GO,
      },
      {
        onSuccess: () => handleClose,
      },
    );
  };

  return (
    <>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleMenuOpen}>
        <OptionsIcon />
      </IconButton>
      <StyledMenu
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'left', vertical: 'top' }}>
        <StyledMenuItem className="delete" onClick={onNoGoClick}>
          No Go
        </StyledMenuItem>
        <StyledMenuItem className="edit" onClick={onNoGoClick}>
          Edit
        </StyledMenuItem>
      </StyledMenu>
    </>
  );
};

export default Options;
