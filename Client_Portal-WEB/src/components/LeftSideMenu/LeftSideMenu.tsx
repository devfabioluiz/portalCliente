import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import {
  MenuList,
  StyledDrawer,
} from 'src/components/LeftSideMenu/LeftSideMenu.styles';
import { MENU_TABS } from 'src/components/LeftSideMenu/constants';
import MenuItem from 'src/components/MenuItem/MenuItem';

interface IProps {
  onMenuOpen: (state: boolean) => void;
}

const CustomMenu = ({ onMenuOpen }: IProps): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleDrawer = useCallback((status: boolean) => {
    setIsOpen(status);
  }, []);

  const redirect = useCallback((route?: string) => null, []);

  const handleSelected: (item?: string) => boolean = useCallback(
    (item?: string) => item === location.pathname,
    [location],
  );

  useEffect(() => {
    onMenuOpen(isOpen);
  }, [onMenuOpen, isOpen]);

  return (
    <StyledDrawer
      variant="permanent"
      open={isOpen}
      onMouseOver={() => {
        handleDrawer(true);
      }}
      onMouseLeave={() => {
        handleDrawer(false);
      }}>
      <MenuList>
        {MENU_TABS.map((item, i) => (
          <MenuItem
            key={i}
            label={item.label}
            icon={item.icon}
            onClick={() => redirect(item.route)}
            selectedItem={handleSelected(item.route)}
          />
        ))}
      </MenuList>
    </StyledDrawer>
  );
};

export default CustomMenu;
