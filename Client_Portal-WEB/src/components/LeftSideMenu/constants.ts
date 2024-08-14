import {
  Dashboard,
  MenuRounded,
  Person,
  Settings,
  Topic,
} from '@mui/icons-material';

import { type IMenuItem } from 'src/components/MenuItem/MenuItem';

const MENU_TABS: IMenuItem[] = [
  {
    label: 'Dashboard',
    icon: Dashboard,
    route: 'dashboard',
  },
  {
    label: 'Recruitment',
    icon: MenuRounded,
    route: 'recruitment',
  },
  {
    label: 'Consultants',
    icon: Person,
    route: 'consultants',
  },
  {
    label: 'Clients',
    icon: '/assets/icons/consultants-icon.svg',
    route: 'clients',
  },
  {
    label: 'Projects',
    icon: Topic,
    route: 'projects',
  },
  {
    label: 'Settings',
    icon: Settings,
    route: 'settings',
  },
];

export { MENU_TABS };
