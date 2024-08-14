import {
  type ChangeEvent,
  type FC,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';

import { Button, Container, Input } from '@mui/material';

import { useNotification } from 'src/hooks';
import { Spinner } from 'src/pages/Login/Login.styles';
import { uploadFileToBlob } from 'src/services/blob.service';

const generateInputKey = (): string =>
  Math.random().toString(36).substring(2, 15);

interface IProps {
  onFileUploaded?: (fileURL: string) => void;
  isInstantUpload?: boolean;
}

const FileUpload: FC<IProps> = ({
  onFileUploaded,
  isInstantUpload = false,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileSelected, setFileSelected] = useState<File | null>(null);

  const [uploading, setUploading] = useState(false);
  const [inputKey, setInputKey] = useState(generateInputKey());

  const { addNotification } = useNotification();

  useEffect(() => {
    if (isInstantUpload && inputRef.current) {
      inputRef.current.click();
    }
  }, []);

  const onFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const file = event.target?.files != null ? event.target.files[0] : null;
    setFileSelected(file);

    if (isInstantUpload) {
      void uploadFile(file);
    }
  };

  const uploadFile = async (file?: File | null): Promise<void> => {
    setUploading(true);
    const res = await uploadFileToBlob(file ?? fileSelected);

    setUploading(false);
    setInputKey(generateInputKey());

    if (!res || res?.status !== 201) {
      // TODO: Add more error messages
      addNotification({
        type: 'error',
        message: 'Something went wrong when uploading file',
      });
    } else {
      addNotification({
        type: 'success',
        message: 'File uploaded successfully',
      });

      if (onFileUploaded) {
        const fileURL = res.request.url.replace(/\?(.*)/, '');
        onFileUploaded(fileURL);
      }
    }
  };

  const DisplayForm = (): ReactNode => (
    <div>
      <label
        htmlFor="upload-file"
        style={{
          cursor: 'pointer',
          marginRight: 20,
          textDecoration: 'underline',
          fontSize: 12,
        }}>
        {/* TODO: Customize upload button here Choose File */}
        {fileSelected
          ? fileSelected.name
          : isInstantUpload
          ? ''
          : 'Choose File'}
      </label>
      <Input
        inputRef={inputRef}
        type="file"
        onChange={onFileChange}
        key={inputKey || ''}
        id="upload-file"
        style={{ display: 'none' }}
      />
      {!isInstantUpload && (
        <Button
          disabled={fileSelected === null}
          variant="contained"
          color="primary"
          onClick={async () => {
            await uploadFile();
          }}>
          Upload File
        </Button>
      )}
    </div>
  );

  return (
    <Container disableGutters>
      {!uploading && DisplayForm()}
      {uploading && <Spinner />}
    </Container>
  );
};

export default FileUpload;
