import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { useTechnologies } from 'src/api';
import { type CreateOpportunityFormType } from 'src/pages/Opportunities/TopBar/CreateOpportunity/CreateOpportunity.schema';
import {
  AddIcon,
  RemoveButton,
  RemoveIcon,
  StyledBox,
  StyledButton,
  StyledContainer,
  StyledFormControl,
} from 'src/pages/Opportunities/TopBar/CreateOpportunity/sections/Technology/Technology.styles';
import TechnologyModal from 'src/pages/Opportunities/TopBar/CreateOpportunity/sections/Technology/TechnologyModal/TechnologyModal';

const TechnologySection = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  const { setValue, watch, unregister } =
    useFormContext<CreateOpportunityFormType>();
  const values = watch('technologies') ?? [];
  const closeModal = (): void => {
    setIsOpen(false);
  };

  const techs = useTechnologies();

  const onClick = (techId: string): void => {
    if (!values.filter((item) => item.id !== techId).length) {
      unregister('technologies');
    } else {
      setValue(
        'technologies',
        values.filter((item) => item.id !== techId),
      );
    }
  };

  return (
    <StyledFormControl>
      Technologies
      <StyledContainer>
        {values.length !== 0 &&
          values.map((v) => {
            return (
              <StyledBox key={v.id}>
                {techs.data.filter((item) => item.id === v.id)[0].name}
                <RemoveButton
                  onClick={() => {
                    onClick(v.id);
                  }}
                  disableRipple>
                  <RemoveIcon />
                </RemoveButton>
              </StyledBox>
            );
          })}
        <StyledButton
          className={values?.length !== 0 ? 'optionSelected' : ''}
          onClick={() => {
            setIsOpen(true);
          }}
          disableRipple>
          <AddIcon />
          {values.length === 0 && `Add Technology`}
        </StyledButton>
      </StyledContainer>
      <TechnologyModal open={isOpen} onClose={closeModal} />
    </StyledFormControl>
  );
};

export default TechnologySection;
