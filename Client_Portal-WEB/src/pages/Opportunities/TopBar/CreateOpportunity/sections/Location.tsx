import { type ReactElement } from 'react';
import { type UseFormRegister } from 'react-hook-form';

import { type CreateOpportunityFormType } from 'src/pages/Opportunities/TopBar/CreateOpportunity/CreateOpportunity.schema';
import {
  StyledFormControl,
  StyledInput,
} from 'src/pages/Opportunities/TopBar/CreateOpportunity/CreateOpportunity.styles';

interface IProps {
  registerMethod: UseFormRegister<CreateOpportunityFormType>;
}

const LocationSection = ({ registerMethod }: IProps): ReactElement => (
  <StyledFormControl>
    Location
    <StyledInput
      type="text"
      placeholder="Insert Location"
      {...registerMethod('location')}
    />
  </StyledFormControl>
);

export default LocationSection;
