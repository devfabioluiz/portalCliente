import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { type CreateOpportunityFormType } from 'src/pages/Opportunities/TopBar/CreateOpportunity/CreateOpportunity.schema';
import {
  AddIcon,
  RemoveButton,
  RemoveIcon,
  StyledBox,
  StyledButton,
  StyledFormControl,
} from 'src/pages/Opportunities/TopBar/CreateOpportunity/sections/Role/Role.styles';
import RoleModal from 'src/pages/Opportunities/TopBar/CreateOpportunity/sections/Role/RoleModal/RoleModal';

const RoleSection = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const { watch, unregister } = useFormContext<CreateOpportunityFormType>();
  const selectedValue = watch('role') ?? null;
  const closeModal = (): void => {
    setIsOpen(false);
  };

  return (
    <StyledFormControl>
      Role
      {selectedValue === null ? (
        <StyledButton
          onClick={() => {
            setIsOpen(true);
          }}
          disableRipple>
          <AddIcon />
          Add Role
        </StyledButton>
      ) : (
        <StyledBox>
          {selectedValue?.name}
          <RemoveButton
            onClick={() => {
              unregister('role');
            }}
            disableRipple>
            <RemoveIcon />
          </RemoveButton>
        </StyledBox>
      )}
      <RoleModal open={isOpen} onClose={closeModal} />
    </StyledFormControl>
  );
};

export default RoleSection;
