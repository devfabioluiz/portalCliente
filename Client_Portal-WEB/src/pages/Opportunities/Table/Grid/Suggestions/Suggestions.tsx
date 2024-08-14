import { type ReactElement, useState } from 'react';

import { CircularProgress } from '@mui/material';

import { useSetRecoilState } from 'recoil';

import { type CreateSuggestionSchemaType, useCreateSuggestion } from 'src/api';
import { Modal } from 'src/components/Modal';
import { Consultants } from 'src/pages/Opportunities/Table/Grid/Suggestions/Consultants';
import { Header } from 'src/pages/Opportunities/Table/Grid/Suggestions/Header';
import {
  LoadingContainer,
  ModalContainer,
  StyledPersonAddAlt1Icon,
  StyledSuggestContainer,
} from 'src/pages/Opportunities/Table/Grid/Suggestions/Suggestions.styles';
import { suggestionsAtom } from 'src/recoil/suggestions';

interface IProps {
  opportunityId: string;
}

const Suggestions = ({ opportunityId }: IProps): ReactElement => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const setSelectedConsultants = useSetRecoilState(suggestionsAtom);
  const { mutateAsync, isLoading } = useCreateSuggestion();

  const onSubmit = async (
    suggestion: CreateSuggestionSchemaType,
  ): Promise<void> => {
    await mutateAsync(suggestion);
    setIsModalOpen(false);
    setSelectedConsultants({});
  };

  return (
    <StyledSuggestContainer>
      <StyledPersonAddAlt1Icon
        onClick={() => {
          setIsModalOpen(true);
        }}
      />
      <Modal
        isOpen={isModalOpen}
        onModalClose={() => {
          setIsModalOpen(false);
          setSelectedConsultants({});
        }}
        renderHeader={<Header />}>
        <ModalContainer>
          {isLoading && (
            <LoadingContainer>
              <CircularProgress />
            </LoadingContainer>
          )}
          <Consultants onSubmit={onSubmit} opportunityId={opportunityId} />
        </ModalContainer>
      </Modal>
    </StyledSuggestContainer>
  );
};

export default Suggestions;
