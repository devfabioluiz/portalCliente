import { useState } from 'react';

import { Modal, Typography } from '@mui/material';

import { useDeleteOpportunity } from 'src/api';
import { ConfirmModal } from 'src/components';
import EditOpportunity from 'src/pages/Opportunities/EditOpportunity/EditOpportunity';
import { Heading } from 'src/pages/Opportunities/Table/Grid/ConfirmModal.styles';
import {
  OptionsButton,
  OptionsIcon,
  StyledBox,
  StyledButton,
  StyledTooltip,
} from 'src/pages/Opportunities/Table/Grid/Grid.styles';

interface IProps {
  opportunityId: string;
}

const Options = (props: IProps): React.ReactElement => {
  const { opportunityId } = props;
  const deleteOpportunity = useDeleteOpportunity();
  const [isOptionMenuOpen, setIsOptionMenuOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleEditModalOpen = (): void => {
    setIsOpen(true);
  };

  const handleClose = (): void => {
    setIsOpen(false);
  };

  const handleClickOnDelete = (
    _event: React.MouseEvent<HTMLButtonElement>,
  ): void => {
    setIsDeleteModalOpen(true);
  };

  const handleDeleteOpportunity = (): void => {
    deleteOpportunity.mutate({
      id: opportunityId,
    });
    setIsDeleteModalOpen(false);
  };

  return (
    <>
      <StyledTooltip
        title={
          <StyledBox>
            <StyledButton className="delete" onClick={handleClickOnDelete}>
              Delete
            </StyledButton>
            <StyledButton onClick={handleEditModalOpen}>Edit</StyledButton>
          </StyledBox>
        }
        placement="left"
        onClose={() => {
          // This is a workaround to prevent the tooltip from closing before opening <ConfirmModal>
          setTimeout(() => {
            setIsOptionMenuOpen(false);
          }, 200);
        }}
        open={isOptionMenuOpen}
        disableHoverListener
        disableTouchListener>
        <OptionsButton
          className={isOptionMenuOpen ? 'focus' : ''}
          onClick={() => {
            setIsOptionMenuOpen(!isOptionMenuOpen);
          }}
          disableRipple>
          <OptionsIcon />
        </OptionsButton>
      </StyledTooltip>
      <Modal open={isOpen} onClose={handleClose}>
        <EditOpportunity
          opportunityId={opportunityId}
          handleClose={handleClose}
        />
      </Modal>
      <ConfirmModal
        isOpen={isDeleteModalOpen}
        onModalSubmit={handleDeleteOpportunity}
        onModalClose={() => {
          setIsDeleteModalOpen(false);
        }}
        heading={<Heading>Delete item</Heading>}>
        <Typography>
          Do you want to delete <em>This item</em>?
        </Typography>
      </ConfirmModal>
    </>
  );
};

export default Options;
