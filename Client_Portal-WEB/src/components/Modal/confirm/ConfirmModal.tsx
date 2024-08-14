import { type ReactElement, type ReactNode } from 'react';

import { CancelOutlined } from '@mui/icons-material';
import { Box, Button, IconButton, Modal as MuiModal } from '@mui/material';

import {
  Footer,
  HeaderContainer,
  ModalBodyContainer,
  ModalContainer,
} from 'src/components/Modal/confirm/ConfirmModal.styles';

interface IModal {
  isOpen?: boolean;
  onModalClose: () => void;
  onModalSubmit: () => void;
  heading: ReactNode;
  children: ReactNode;
}

const ConfirmModal = ({
  isOpen = true,
  onModalClose,
  onModalSubmit,
  heading,
  children,
}: IModal): ReactElement => {
  return (
    <MuiModal open={isOpen}>
      <ModalContainer>
        <HeaderContainer>
          <IconButton onClick={onModalClose} size={'small'}>
            <CancelOutlined />
          </IconButton>
          <Box>{heading}</Box>
        </HeaderContainer>
        <ModalBodyContainer>{children}</ModalBodyContainer>
        <Footer>
          <Button variant="contained" onClick={onModalSubmit}>
            Confirm
          </Button>
          <Button variant="outlined" onClick={onModalClose}>
            Cancel
          </Button>
        </Footer>
      </ModalContainer>
    </MuiModal>
  );
};
export default ConfirmModal;
