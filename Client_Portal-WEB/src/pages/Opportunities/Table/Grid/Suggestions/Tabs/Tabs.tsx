import { type ReactElement } from 'react';

import { Stack } from '@mui/material';

import {
  SuggestionsTabs,
  TabButton,
} from 'src/pages/Opportunities/Table/Grid/Suggestions/Tabs/TabButton';

interface IProps {
  activeTab: SuggestionsTabs;
  onTabChange: (activeTab: SuggestionsTabs) => void;
}

const Tabs = ({ activeTab, onTabChange }: IProps): ReactElement => (
  <Stack direction={'row'} spacing={2} mt={1}>
    <TabButton
      title={SuggestionsTabs.suggest}
      isActive={activeTab === SuggestionsTabs.suggest}
      onClick={onTabChange}
    />
    <TabButton
      title={SuggestionsTabs.review}
      isActive={activeTab === SuggestionsTabs.review}
      onClick={onTabChange}
    />
  </Stack>
);

export default Tabs;
