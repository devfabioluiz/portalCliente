import { type ReactElement } from 'react';

import { Typography } from '@mui/material';

import { StyledButton } from 'src/pages/Opportunities/Table/Grid/Suggestions/Tabs/TabButton/TabButton.styles';

export enum SuggestionsTabs {
  suggest = 'Suggest',
  review = 'Review',
}

interface IProps {
  isActive: boolean;
  title: SuggestionsTabs;
  onClick: (activeTab: SuggestionsTabs) => void;
}

const TabButton = ({ isActive, title, onClick }: IProps): ReactElement => (
  <StyledButton
    variant={isActive ? 'outlined' : 'contained'}
    onClick={() => {
      onClick(title);
    }}
    {...(isActive && { className: 'active' })}>
    <Typography fontWeight={'bold'} fontSize={12}>
      {title}
    </Typography>
  </StyledButton>
);

export default TabButton;
