import { type SvgIconComponent } from '@mui/icons-material';
import { Icon, ListItem } from '@mui/material';

import { MenuItemBtn, MenuText } from 'src/components/MenuItem/MenuItem.styles';

export interface IMenuItem {
  label: string;
  icon: SvgIconComponent | string;
  route: string;
}

interface IProps extends Omit<IMenuItem, 'route'> {
  onClick: () => void;
  selectedItem?: boolean;
}

const MenuItem = ({
  label,
  icon,
  onClick,
  selectedItem,
}: IProps): React.ReactElement => {
  return (
    <ListItem key={label} onClick={onClick} disablePadding>
      <MenuItemBtn selected={selectedItem}>
        {typeof icon === 'string' ? (
          <img src={icon} alt={label} />
        ) : (
          <Icon component={icon} />
        )}
        <MenuText primary={label} />
      </MenuItemBtn>
    </ListItem>
  );
};

export default MenuItem;
