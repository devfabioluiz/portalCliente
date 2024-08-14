import { type ITabItem } from 'src/components/Tabs/Tabs.types';

const tabsContent: ITabItem[] = [
  {
    label: 'Opportunities',
    href: '/opportunities',
    value: 0,
  },
  {
    label: 'Candidates',
    href: '/candidates',
    value: 1,
  },
  {
    label: 'Consultants',
    href: '/consultants',
    value: 2,
  },
];

export { tabsContent };
