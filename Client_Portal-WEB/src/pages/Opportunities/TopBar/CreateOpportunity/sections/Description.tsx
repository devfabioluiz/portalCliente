import { type ReactElement } from 'react';
import { type UseFormRegister } from 'react-hook-form';

import { type CreateOpportunityFormType } from 'src/pages/Opportunities/TopBar/CreateOpportunity/CreateOpportunity.schema';
import {
  DescriptionInput,
  StyledFormControl,
} from 'src/pages/Opportunities/TopBar/CreateOpportunity/CreateOpportunity.styles';

interface IProps {
  registerMethod: UseFormRegister<CreateOpportunityFormType>;
}

const DescriptionSection = ({ registerMethod }: IProps): ReactElement => (
  <StyledFormControl>
    Description
    <DescriptionInput
      type="text"
      placeholder="Insert Description"
      multiline={true}
      rows={5}
      {...registerMethod('description')}
    />
  </StyledFormControl>
);

export default DescriptionSection;
