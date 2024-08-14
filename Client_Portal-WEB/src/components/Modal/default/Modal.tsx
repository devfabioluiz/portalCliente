import { type ReactElement, type ReactNode } from 'react';

import { CancelOutlined } from '@mui/icons-material';
import { Box, IconButton, Modal as MuiModal } from '@mui/material';

import {
  HeaderContainer,
  ModalContainer,
} from 'src/components/Modal/default/Modal.styles';

interface IModal {
  children: ReactElement;
  isOpen?: boolean;
  onModalClose: () => void;
  renderHeader?: ReactNode;
  width?: string;
}

const Modal = ({
  children,
  isOpen = true,
  onModalClose,
  renderHeader,
  width = '25%',
}: IModal): ReactElement => {
  const Header = (): ReactElement => <Box>{renderHeader}</Box>;

  return (
    <MuiModal open={isOpen}>
      <ModalContainer width={width}>
        <HeaderContainer>
          <IconButton onClick={onModalClose} size={'small'}>
            <CancelOutlined />
          </IconButton>
          <Header />
        </HeaderContainer>
        {children}
      </ModalContainer>
    </MuiModal>
  );
};
export default Modal;
