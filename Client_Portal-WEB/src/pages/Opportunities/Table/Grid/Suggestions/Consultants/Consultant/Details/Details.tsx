import { type ReactElement } from 'react';

import { useRecoilValue, useSetRecoilState } from 'recoil';

import { FileUpload } from 'src/components';
import {
  FormContainer,
  SalaryInput,
  salaryInputPropsStyle,
} from 'src/pages/Opportunities/Table/Grid/Suggestions/Consultants/Consultant/Details/Details.styles';
import { ConsultantRow } from 'src/pages/Opportunities/Table/Grid/Suggestions/Consultants/Consultant/Details/Row';
import {
  SuggestionKeys,
  suggestionsAtom,
  suggestionsAtomSingleData,
} from 'src/recoil/suggestions';

interface IProps {
  id: string;
}

const ConsultantDetails = ({ id }: IProps): ReactElement => {
  const suggestion = useRecoilValue(suggestionsAtomSingleData(id));
  const setSuggestions = useSetRecoilState(suggestionsAtom);

  const onFieldChange = (
    fieldName: Exclude<SuggestionKeys, SuggestionKeys.isSelected>,
    value: string,
  ): void => {
    setSuggestions((oldSuggestions) => ({
      ...oldSuggestions,
      [id]: {
        ...oldSuggestions[id],
        [fieldName]: value,
      },
    }));
  };

  return (
    <FormContainer>
      <ConsultantRow
        title="Fee"
        isMandatory
        placeholder="Add fee"
        showControlIcon={!suggestion.salary}>
        <SalaryInput
          variant="outlined"
          size="small"
          inputProps={{
            style: salaryInputPropsStyle,
          }}
          onChange={(event) => {
            onFieldChange(SuggestionKeys.salary, event.target.value);
          }}
        />
      </ConsultantRow>

      <ConsultantRow
        title="CV"
        isMandatory
        placeholder="Add CV"
        showControlIcon={!suggestion.cvFileUrl}>
        <FileUpload
          isInstantUpload
          onFileUploaded={(fileUrl) => {
            onFieldChange(SuggestionKeys.cvFileUrl, fileUrl);
          }}
        />
      </ConsultantRow>

      <ConsultantRow
        title="Test"
        placeholder="Add test"
        showControlIcon={!suggestion.testFileUrl}>
        <FileUpload
          isInstantUpload
          onFileUploaded={(fileUrl) => {
            onFieldChange(SuggestionKeys.testFileUrl, fileUrl);
          }}
        />
      </ConsultantRow>
    </FormContainer>
  );
};

export default ConsultantDetails;
