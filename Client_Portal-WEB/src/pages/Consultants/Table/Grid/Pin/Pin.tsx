import type * as React from 'react';

import {
  StyledPushPinIcon,
  StyledPushPinOutlinedIcon,
} from 'src/pages/Consultants/Table/Grid/Grid.styles';

interface IProps {
  id: string;
  isPinned: boolean | undefined;
}

const PinComponent = ({ id, isPinned }: IProps): React.ReactElement => {
  const handlePinOpportunity = (): void => {
    console.log('PinComponent', id, isPinned);
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
