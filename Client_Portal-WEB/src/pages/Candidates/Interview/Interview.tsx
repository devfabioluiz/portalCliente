import { useState } from 'react';

import { StyledInterviewButton } from 'src/pages/Candidates/Interview/Interview.styles';
import { InterviewModal } from 'src/pages/Candidates/Interview/InterviewModal';

interface IProps {
  candidateId: string;
}

const Interview = ({ candidateId }: IProps): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <StyledInterviewButton
        variant="outlined"
        onClick={() => {
          setIsOpen(true);
        }}>
        <img src="/assets/icons/edit-calendar-rounded.svg" /> open
      </StyledInterviewButton>

      {isOpen && (
        <InterviewModal
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
          candidateId={candidateId}
        />
      )}
    </>
  );
};

export default Interview;
