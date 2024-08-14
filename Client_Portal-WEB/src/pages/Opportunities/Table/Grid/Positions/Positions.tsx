import { useState } from 'react';

import {
  StyledBrightness1IconGreen,
  StyledBrightness1IconOrange,
  StyledBrightness1IconRed,
  StyledPositionNumber,
  StyledRequestedPositionsContainer,
} from 'src/pages/Opportunities/Table/Grid/Positions/Positions.style';
import PositionsModal from 'src/pages/Opportunities/Table/Grid/Positions/PositionsModal/PositionsModal';

interface IProps {
  requestedPositions: number | undefined;
  submittedPositions: number | undefined;
  opportunityId: string;
}

const Positions = ({
  requestedPositions,
  submittedPositions,
  opportunityId,
}: IProps): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  const positionsStatus = (): React.ReactElement => {
    /* 
     The goal here is for the number of submitted positions to be the double of the number of requested positions

     - if we achieve that the status should be green
     - if the number of the submited positions is greater than the number of requested positions
      and less than the double of requested positions the status should be orange
     - if it's less than the requested positions the status should be red
    */
    if (
      requestedPositions != null &&
      submittedPositions === requestedPositions * 2
    )
      return <StyledBrightness1IconGreen />;
    else if (
      submittedPositions != null &&
      requestedPositions != null &&
      submittedPositions >= requestedPositions &&
      submittedPositions < requestedPositions * 2
    )
      return <StyledBrightness1IconOrange />;
    else return <StyledBrightness1IconRed />;
  };

  return (
    <>
      <StyledRequestedPositionsContainer
        onClick={() => {
          setIsOpen(true);
        }}>
        {positionsStatus()}
        <StyledPositionNumber>{requestedPositions}</StyledPositionNumber>
      </StyledRequestedPositionsContainer>

      {isOpen && (
        <PositionsModal
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
          opportunityId={opportunityId}
        />
      )}
    </>
  );
};

export default Positions;
