import { useState } from 'react';

import {
  OptionsButton,
  OptionsIcon,
  StyledBox,
  StyledButton,
  StyledTooltip,
} from 'src/pages/Consultants/Table/Grid/Grid.styles';

const Options = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledTooltip
      title={
        <StyledBox>
          <StyledButton className="delete">Delete</StyledButton>
          <StyledButton>Edit</StyledButton>
        </StyledBox>
      }
      placement="left"
      onClose={() => {
        setIsOpen(false);
      }}
      open={isOpen}
      disableHoverListener
      disableTouchListener>
      <OptionsButton
        className={isOpen ? 'focus' : ''}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        disableRipple>
        <OptionsIcon />
      </OptionsButton>
    </StyledTooltip>
  );
};

export default Options;
