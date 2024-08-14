import { HiringStatus } from 'src/api/candidates';
import { StyledStatusButton } from 'src/pages/Candidates/Table/Grid/Grid.styles';

interface Props {
  statusMessage: HiringStatus;
}

const Status = ({ statusMessage }: Props): React.ReactElement => {
  const { WAITING, ROUND_1, ROUND_2 } = HiringStatus;

  const convertStatusMessage = (): string => {
    switch (statusMessage) {
      case WAITING:
        return 'Waiting';
      case ROUND_1:
        return '#1 Round';
      case ROUND_2:
        return '#2 Round';
      default:
        return '';
    }
  };

  return (
    <StyledStatusButton
      variant="contained"
      disabled={statusMessage === WAITING}
      className={statusMessage}
      size="small">
      {convertStatusMessage()}
    </StyledStatusButton>
  );
};

export default Status;
