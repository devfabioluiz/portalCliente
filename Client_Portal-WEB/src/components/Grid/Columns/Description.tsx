import { useState } from 'react';

import { Button, Typography } from '@mui/material';

import { Modal } from 'src/components/Modal';
import {
  Footer,
  Heading,
  ModalBodyContainer,
  StyledIconContainer,
} from 'src/pages/Consultants/Table/Grid/Grid.styles';

interface Props {
  description: string | undefined;
}

const Description = ({ description }: Props): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <StyledIconContainer
        disableRipple
        onClick={() => {
          setIsOpen(true);
        }}>
        <img src={'/assets/icons/description-icon.svg'} alt="" />
      </StyledIconContainer>
      <Modal
        isOpen={isOpen}
        onModalClose={() => {
          setIsOpen(false);
        }}
        renderHeader={<Heading>Description</Heading>}>
        <>
          <ModalBodyContainer>
            <Typography>{description}</Typography>
          </ModalBodyContainer>
          <Footer>
            <Button
              variant="contained"
              onClick={() => {
                setIsOpen(false);
              }}>
              Close
            </Button>
          </Footer>
        </>
      </Modal>
    </>
  );
};

export default Description;
