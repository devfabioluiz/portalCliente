import { useState } from 'react';

import { HiringStatus } from 'src/api/candidates';
import GoWithCandidateModal from 'src/pages/Candidates/Modals/GoWithCandidateModal';
import { StyledDecisionButton } from 'src/pages/Candidates/Table/Grid/Grid.styles';
import { type IDecisionColumn } from 'src/pages/Candidates/Table/Grid/Grid.types';

const Decision = ({
  candidate,
  status,
}: IDecisionColumn): React.ReactElement => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <StyledDecisionButton
        size="small"
        variant="contained"
        disabled={status === HiringStatus.WAITING}
        onClick={() => {
          setIsModalOpen(true);
        }}>
        {status === HiringStatus.WAITING || !status ? 'Waiting' : 'Go'}
      </StyledDecisionButton>
      <GoWithCandidateModal
        candidate={candidate}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      />
    </>
  );
};

export default Decision;
