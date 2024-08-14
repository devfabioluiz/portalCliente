import { useState } from 'react';

import { CancelOutlined } from '@mui/icons-material';
import { Modal } from '@mui/material';

import { useCreateInterview } from 'src/api/interview';
import { addMinutes, formatDateToISOFormat } from 'src/helpers';
import {
  ModalBodyContainer,
  StyledIconButton,
} from 'src/pages/Candidates/Interview/InterviewModal/InterviewModal.styles';
import { ScheduleInterview } from 'src/pages/Candidates/Interview/InterviewModal/ModalContent';
import ConfirmationModalContent from 'src/pages/Candidates/Interview/InterviewModal/ModalContent/Confirmation/Confirmation';

interface Props {
  candidateId: string;
  isOpen: boolean;
  onClose: () => void;
}
interface SendEmailProps {
  date: Date | unknown;
  time: string;
  note: string;
}

const InterviewModal = ({
  candidateId,
  isOpen,
  onClose,
}: Props): React.ReactElement => {
  const [confirmationContent, setConfirmationContent] =
    useState<boolean>(false);
  const [dateTime, setDateTime] = useState<string>('');

  const { mutateAsync, isLoading } = useCreateInterview();

  const sendEmail = async ({
    date,
    time,
    note,
  }: SendEmailProps): Promise<void> => {
    const convertedStartDatetime = formatDateToISOFormat(
      `${date as string} ${time}`,
    );
    const convertedEndDatetime = formatDateToISOFormat(
      addMinutes(convertedStartDatetime, 30),
    );

    await mutateAsync(
      {
        candidateId,
        date: {
          startDate: convertedStartDatetime,
          endDate: convertedEndDatetime,
        },
        note,
      },
      {
        onSuccess(data, variables, context) {
          setConfirmationContent(true);
          setDateTime(variables.date.startDate);
        },
      },
    );
  };

  return (
    <Modal open={isOpen}>
      <ModalBodyContainer
        className={confirmationContent ? 'confirmation' : 'schedule'}>
        <StyledIconButton onClick={onClose} size="small">
          <CancelOutlined fontSize="small" />
        </StyledIconButton>

        {!confirmationContent ? (
          <ScheduleInterview
            onSubmit={async (date, time, note) => {
              await sendEmail({ date, time, note });
            }}
            isLoading={isLoading}
          />
        ) : (
          <ConfirmationModalContent datetime={dateTime} />
        )}
      </ModalBodyContainer>
    </Modal>
  );
};

export default InterviewModal;
