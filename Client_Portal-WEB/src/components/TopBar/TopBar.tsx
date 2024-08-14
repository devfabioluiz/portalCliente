import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { PersonRounded } from '@mui/icons-material';

import { useRecoilState } from 'recoil';

import { resetTokens } from 'src/api';
import MenuItem from 'src/components/MenuItem/MenuItem';
import {
  StyledBar,
  StyledButton,
  StyledMenu,
  StyledToolBar,
} from 'src/components/TopBar/TopBar.styles';
import { topMenuContent } from 'src/components/TopBar/constants';
import { userAtom } from 'src/recoil/user';

const TopBar = (): React.ReactElement => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [, setUser] = useRecoilState(userAtom);

  const isOpen = Boolean(anchorEl);

  const handleClick: (event: React.MouseEvent<HTMLElement>) => void = (
    event,
  ) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose: () => void = () => {
    setAnchorEl(null);
  };

  const logout = (): void => {
    setUser(null);
    resetTokens();
    navigate(`/${topMenuContent.logout.route}`);
  };

  return (
    <StyledBar position="fixed">
      <StyledToolBar>
        <StyledButton onClick={handleClick}>
          <PersonRounded color="primary" fontSize="small" />
        </StyledButton>
      </StyledToolBar>

      <StyledMenu
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.12))',
            mt: 1.5,
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
        <MenuItem
          label={topMenuContent.dashboard.label}
          icon={topMenuContent.dashboard.icon}
          onClick={() => {
            navigate(`/${topMenuContent.dashboard.route}`);
            handleClose();
          }}
        />
        <MenuItem
          label={topMenuContent.logout.label}
          icon={topMenuContent.logout.icon}
          onClick={logout}
        />
      </StyledMenu>
    </StyledBar>
  );
};
export default TopBar;
