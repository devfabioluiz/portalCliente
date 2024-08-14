import { type ReactElement } from 'react';

import {
  StyledHistoryContainer,
  StyledHistoryIcon,
} from 'src/pages/Opportunities/Table/Grid/History/History.styles';

const History = (): ReactElement => {
  return (
    <StyledHistoryContainer>
      <StyledHistoryIcon />
    </StyledHistoryContainer>
  );
};

export default History;
