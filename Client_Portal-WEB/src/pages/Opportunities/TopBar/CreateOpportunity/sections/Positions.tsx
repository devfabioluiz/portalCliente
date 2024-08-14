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

const PositionsSection = ({ registerMethod }: IProps): ReactElement => {
  return (
    <StyledFormControl>
      Number of Positions
      <StyledInput
        className="number"
        type="number"
        placeholder="Insert Number of Positions"
        {...registerMethod('numOfRequestedPositions')}
      />
    </StyledFormControl>
  );
};

export default PositionsSection;
