import { Dashboard, PowerSettingsNew } from '@mui/icons-material';

import { type IMenuItem } from 'src/components/MenuItem/MenuItem';

interface ITopMenuContent {
  dashboard: IMenuItem;
  logout: IMenuItem;
}

const topMenuContent: ITopMenuContent = {
  dashboard: {
    label: 'Manage account',
    icon: Dashboard,
    route: 'manage-account',
  },
  logout: {
    label: 'Logout',
    icon: PowerSettingsNew,
    route: 'login',
  },
};

export { topMenuContent };
