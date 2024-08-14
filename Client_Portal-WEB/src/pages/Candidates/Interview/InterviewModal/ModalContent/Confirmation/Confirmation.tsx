import { Box } from '@mui/material';

import { formatDateToDayMonthDate, formatDateToTime } from 'src/helpers';
import {
  StyledConfirmContainer,
  StyledDescription,
  StyledInterviewData,
  StyledTitle,
} from 'src/pages/Candidates/Interview/InterviewModal/ModalContent/Confirmation/Confirmation.styles';

interface Props {
  datetime: string;
}

const ConfirmationModalContent = ({ datetime }: Props): React.ReactElement => {
  const convertedDatetime = new Date(datetime).toUTCString();
  const date = formatDateToDayMonthDate(convertedDatetime);
  const time = formatDateToTime(convertedDatetime);

  return (
    <StyledConfirmContainer>
      <StyledInterviewData>{date}</StyledInterviewData>
      <img src="/assets/icons/confirm-icon.svg" />
      <StyledTitle>Interview Scheduled</StyledTitle>
      <Box>
        <StyledDescription>
          All Check! The interview has been scheduled for
        </StyledDescription>
        <StyledDescription className="hightlight">
          {date} at {time}
        </StyledDescription>
      </Box>
      <StyledDescription>
        An email has been forward to you to add this date to your calendar.
      </StyledDescription>
    </StyledConfirmContainer>
  );
};

export default ConfirmationModalContent;
