import { useRecoilValue } from 'recoil';

import { type CreateSuggestionSchemaType } from 'src/api';
import { SubmitButton } from 'src/pages/Opportunities/Table/Grid/Suggestions/Consultants/Consultants.styles';
import {
  suggestionsAtom,
  suggestionsAtomIsFormValid,
} from 'src/recoil/suggestions';

interface IProps {
  onSubmit: (suggestion: CreateSuggestionSchemaType) => void;
  opportunityId: string;
}

const Submit = ({ opportunityId, onSubmit }: IProps): JSX.Element => {
  const selectedConsultants = useRecoilValue(suggestionsAtom);
  const isFormValid = useRecoilValue(suggestionsAtomIsFormValid);

  const handleSubmit = (): void => {
    const consultantsIds = Object.keys(selectedConsultants);

    const suggestions = consultantsIds
      .filter((consultantId) => selectedConsultants[consultantId].isSelected)
      .map((consultantId) => ({
        consultantId,
        salary: Number(selectedConsultants[consultantId].salary),
        cvFileUrl: selectedConsultants[consultantId].cvFileUrl,
        testResultFileUrl: selectedConsultants[consultantId].testFileUrl,
      }));

    onSubmit({ opportunityId, suggestions });
  };

  return (
    <SubmitButton disabled={!isFormValid} onClick={handleSubmit}>
      Select
    </SubmitButton>
  );
};

export default Submit;
