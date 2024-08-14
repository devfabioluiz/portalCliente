import { type FC, type ReactElement } from 'react';

import {
  Add,
  ChevronLeft,
  ChevronRight,
  FileDownloadOutlined,
  FileUploadOutlined,
  Fullscreen,
  Remove,
} from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';

import {
  HeaderContainer,
  MainHeader,
  ModalBodyContainer,
  ModalFooterCenterSection,
  ModalFooterContainer,
  OperationButton,
  OperationControllersContainer,
  Pagination,
  PaginationButton,
  PaginationContainer,
  PdfContainer,
  SubHeader,
  Tooltip,
  ZoomButton,
  ZoomControllersContainer,
} from 'src/components/Attachment/Modal/AttachmentModal.styles';
import { Modal } from 'src/components/Modal';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const AttachmentModal: FC<IProps> = ({ isOpen, onClose }) => {
  /* MOCK VALUES, WILL BE FETCHED FROM THE USER AND FILE */
  const userName = 'John Doe';
  const currentPage = 1;
  const totalPages = 2;

  const Header = (): ReactElement => {
    return (
      <HeaderContainer>
        <MainHeader variant="h1">View CV</MainHeader>
        <SubHeader variant="h2">{userName}</SubHeader>
      </HeaderContainer>
    );
  };

  return (
    <Modal isOpen={isOpen} onModalClose={onClose} width="auto">
      <Container maxWidth="md">
        <Header />
        <ModalBodyContainer>
          <ZoomControllersContainer>
            <ZoomButton>
              <Add fontSize="small" />
            </ZoomButton>
            <ZoomButton>
              <Remove fontSize="small" />
            </ZoomButton>
          </ZoomControllersContainer>
          <PdfContainer />
          <OperationControllersContainer>
            <Tooltip title="Full View" followCursor arrow>
              <OperationButton>
                <Fullscreen fontSize="medium" />
              </OperationButton>
            </Tooltip>
            <Tooltip title="Download" followCursor arrow>
              <OperationButton>
                <FileDownloadOutlined fontSize="medium" />
              </OperationButton>
            </Tooltip>
            <Tooltip title="Replace" followCursor arrow>
              <OperationButton>
                <FileUploadOutlined fontSize="medium" />
              </OperationButton>
            </Tooltip>
          </OperationControllersContainer>
        </ModalBodyContainer>
        <ModalFooterContainer>
          <Box />
          <ModalFooterCenterSection>
            <Box />
            <PaginationContainer>
              <PaginationButton disabled>
                <ChevronLeft fontSize="small" />
              </PaginationButton>
              <PaginationButton>
                <ChevronRight fontSize="small" />
              </PaginationButton>
            </PaginationContainer>
            <Pagination>
              <Typography variant="body1">
                <span>{currentPage}</span> / {totalPages}
              </Typography>
            </Pagination>
          </ModalFooterCenterSection>
          <Box />
        </ModalFooterContainer>
      </Container>
    </Modal>
  );
};

export default AttachmentModal;
