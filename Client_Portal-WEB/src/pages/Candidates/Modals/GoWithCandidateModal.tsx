import type * as React from 'react';

import { Button } from '@mui/material';

import { type ConsultantType } from 'src/api';
import { HiringStatus, useUpdateCandidate } from 'src/api/candidates';
import { Modal } from 'src/components/Modal';
import {
  Footer,
  ModalBodyContainer,
  StyledTypography,
} from 'src/pages/Candidates/Modals/GoWithCandidateModal.styles';

interface IProps {
  candidate: Pick<ConsultantType, 'name' | 'id'>;
  isOpen: boolean;
  onClose: () => void;
}

const GoWithCandidateModal = ({
  candidate,
  isOpen,
  onClose,
}: IProps): React.ReactElement => {
  const { mutateAsync } = useUpdateCandidate();

  const onGoClick = async (): Promise<void> => {
    await mutateAsync(
      {
        candidateId: candidate.id,
        status: HiringStatus.GO,
      },
      {
        onSuccess: () => onClose,
      },
    );
  };

  return (
    <Modal isOpen={isOpen} onModalClose={onClose}>
      <>
        <ModalBodyContainer>
          <StyledTypography>
            Do you want to Go with the hire of the consultant{' '}
            <StyledTypography variant="body1" component="span">
              {candidate.name}
            </StyledTypography>
            ?
          </StyledTypography>
          <StyledTypography>This action is definite.</StyledTypography>
        </ModalBodyContainer>
        <Footer>
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={onGoClick}>
            Go
          </Button>
        </Footer>
      </>
    </Modal>
  );
};

export default GoWithCandidateModal;
