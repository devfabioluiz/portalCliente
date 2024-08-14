import { StyledIcon } from 'src/components/FileView/FileView.styles';

interface IProps {
  fileURL: string | undefined;
  label: string | undefined;
}

const FileView = ({ fileURL, label }: IProps): React.ReactElement => {
  return (
    <a href={fileURL ?? ''} download={label} target="_blank" rel="noreferrer">
      <StyledIcon src={'/assets/icons/file-icon.svg'} alt="" />
    </a>
  );
};

export default FileView;
