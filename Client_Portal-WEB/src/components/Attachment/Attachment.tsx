import { type FC, useState } from 'react';

import { StyledButton } from 'src/components/Attachment/Attachment.styles';
import { AttachmentModal } from 'src/components/Modal/';
import { downloadFile } from 'src/helpers';

interface Props {
  fileUrl?: string;
  hasPreview?: boolean;
}

const Attachment: FC<Props> = ({ fileUrl, hasPreview = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onModalClose = (): void => {
    setIsOpen(false);
  };

  const handleClick = (): void => {
    if (hasPreview) setIsOpen(true);
    else if (fileUrl && fileUrl?.length !== 0) downloadFile(fileUrl);
  };

  return (
    <>
      <StyledButton onClick={handleClick}>
        <img src={'/assets/icons/pdf-icon.svg'} alt="CV" />
      </StyledButton>
      {hasPreview && <AttachmentModal isOpen={isOpen} onClose={onModalClose} />}
    </>
  );
};

export default Attachment;
