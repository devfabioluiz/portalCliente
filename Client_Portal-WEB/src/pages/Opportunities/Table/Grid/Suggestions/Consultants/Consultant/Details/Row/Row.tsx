import { type ReactElement, useState } from 'react';

import { ControlPoint } from '@mui/icons-material';
import { Button, Grid, IconButton } from '@mui/material';

import {
  Container,
  MandatoryMark,
  MandatoryMarkContainer,
  Placeholder,
  Title,
} from 'src/pages/Opportunities/Table/Grid/Suggestions/Consultants/Consultant/Details/Row/Row.styles';

interface IProps {
  children: ReactElement;
  title: string;
  placeholder: string;
  isMandatory?: boolean;
  showControlIcon?: boolean;
}

const Row = ({
  children,
  title,
  placeholder,
  isMandatory,
  showControlIcon,
}: IProps): ReactElement => {
  const [isEditMode, setIsEditMode] = useState(false);

  const handleEditClick = (): void => {
    if (isEditMode) {
      setIsEditMode(false);
    } else {
      setIsEditMode(true);
    }
  };

  return (
    <Container>
      <Grid container spacing={1} alignItems="center">
        <Grid item xs={1}>
          <Title>{title}</Title>
        </Grid>
        <Grid item xs={1}>
          {showControlIcon && !isEditMode && (
            <IconButton size="small" onClick={handleEditClick}>
              <ControlPoint fontSize="inherit" />
            </IconButton>
          )}
        </Grid>
        <Grid item xs={8}>
          {isEditMode ? (
            children
          ) : (
            <Button
              onClick={() => {
                setIsEditMode(true);
              }}>
              <Placeholder>{placeholder}</Placeholder>
            </Button>
          )}
        </Grid>
        <MandatoryMarkContainer item xs={2}>
          {(isMandatory ?? false) && <MandatoryMark>Mandatory</MandatoryMark>}
        </MandatoryMarkContainer>
      </Grid>
    </Container>
  );
};

export default Row;
