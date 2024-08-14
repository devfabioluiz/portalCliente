import type * as React from 'react';

import { usePinOpportunity } from 'src/api';
import {
  StyledPushPinIcon,
  StyledPushPinOutlinedIcon,
} from 'src/pages/Opportunities/Table/Grid/Grid.styles';

interface IProps {
  id: string;
  isPinned: boolean | undefined;
}

const PinComponent = ({ id, isPinned }: IProps): React.ReactElement => {
  const pinOpportunity = usePinOpportunity();
  const handlePinOpportunity = (): void => {
    pinOpportunity.mutate({
      id,
      isPinned,
    });
  };

  return (
    <>
      {isPinned ?? false ? (
        <StyledPushPinIcon onClick={handlePinOpportunity} />
      ) : (
        <StyledPushPinOutlinedIcon onClick={handlePinOpportunity} />
      )}
    </>
  );
};

export default PinComponent;
