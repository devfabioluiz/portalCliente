import { useMemo, useState } from 'react';

import { Box } from '@mui/material';

import Datepicker from 'src/components/Datepicker/Datepicker';
import {
  formatDateToDayMonthDate,
  formatDateToTime,
  formatDateToYearMonthDay,
} from 'src/helpers';
import { Header } from 'src/pages/Candidates/Interview/InterviewModal/Header';
import {
  StyledConfirmButton,
  StyledContainer,
  StyledTextArea,
  StyledTimeButton,
  StyledTimeContainer,
  StyledTypography,
} from 'src/pages/Candidates/Interview/InterviewModal/ModalContent/ScheduleInterview/ScheduleInterview.styles';
import { interviewHours } from 'src/pages/Candidates/Interview/InterviewModal/constants';
import { Spinner } from 'src/pages/Opportunities/TopBar/CreateOpportunity/CreateOpportunity.styles';

interface Props {
  onSubmit: (date: Date | unknown, time: string, note: string) => void;
  isLoading: boolean;
}

const ScheduleInterview = ({
  onSubmit,
  isLoading,
}: Props): React.ReactElement => {
  const [time, setTime] = useState<string>('');
  const [date, setDate] = useState<Date | unknown>('');
  const [note, setNote] = useState<string>('');

  const currentDateFormatted = useMemo(() => {
    return formatDateToYearMonthDay(new Date());
  }, []);

  // Disable time if it is in the past
  const isTimeDisabled = (item: string): boolean => {
    return formatDateToTime(new Date()) > item && date === currentDateFormatted;
  };

  return (
    <>
      <Header date={formatDateToDayMonthDate(date as string)} time={time} />
      <StyledContainer>
        <Datepicker
          onDateChange={(value) => {
            setDate(value);
          }}
        />
        <StyledTimeContainer>
          {interviewHours.map((item, index) => (
            <StyledTimeButton
              key={index}
              variant="outlined"
              onClick={() => {
                setTime(item);
              }}
              disabled={isTimeDisabled(item)}
              {...(item === time && { className: 'selected' })}>
              {item}
            </StyledTimeButton>
          ))}
        </StyledTimeContainer>
      </StyledContainer>
      <Box>
        <StyledTypography>Add Note</StyledTypography>
        <StyledTextArea
          placeholder="Insert Description"
          onChange={(e) => {
            setNote(e.target.value);
          }}
        />
      </Box>
      <StyledConfirmButton
        variant="contained"
        disabled={!(Boolean(date) && time !== '') || isLoading}
        onClick={() => {
          onSubmit(date, time, note);
        }}>
        {isLoading ? <Spinner size={22} /> : 'Confirm'}
      </StyledConfirmButton>
    </>
  );
};

export default ScheduleInterview;
