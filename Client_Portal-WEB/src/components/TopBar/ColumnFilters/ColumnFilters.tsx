import { useRef, useState } from 'react';

import SortIcon from '@mui/icons-material/Sort';
import { Checkbox, Popover } from '@mui/material';
import { useGridApiContext } from '@mui/x-data-grid';

import {
  StyledBox,
  StyledButton,
  StyledFormControlLabel,
} from 'src/components/TopBar/ColumnFilters/ColumnFilters.styles';

const ColumnFilters = (): React.ReactElement => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const columnsButtonRef = useRef<HTMLButtonElement | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(columnsButtonRef?.current);
  };
  const isOpen = Boolean(anchorEl);
  const isHighlighted = isOpen;
  const handleClose = (): void => {
    setAnchorEl(null);
  };
  const apiRef = useGridApiContext();
  return (
    <>
      <StyledButton
        highlighted={isHighlighted}
        ref={columnsButtonRef}
        onClick={handleClick}>
        <SortIcon />
      </StyledButton>
      <Popover
        open={isOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        sx={{ marginTop: '10px' }}>
        <StyledBox>
          {apiRef.current.getAllColumns().map((column) => {
            return (
              <StyledFormControlLabel
                key={column.field}
                className={column.hideable ?? false ? '' : 'hidden'}
                control={<Checkbox size="small" />}
                label={column.headerName}
                checked={apiRef.current.getVisibleColumns().includes(column)}
                onClick={() => {
                  apiRef.current.setColumnVisibility(
                    column.field,
                    !apiRef.current.getVisibleColumns().includes(column),
                  );
                }}
              />
            );
          })}
        </StyledBox>
      </Popover>
    </>
  );
};

export default ColumnFilters;
