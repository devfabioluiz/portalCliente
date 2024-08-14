import { useState } from 'react';

import { ChevronRight } from '@mui/icons-material';
import {
  Box,
  Checkbox,
  ListItemText,
  ListSubheader,
  Typography,
} from '@mui/material';

import PopupState, { bindHover, bindPopover } from 'material-ui-popup-state';
import HoverPopover from 'material-ui-popup-state/HoverPopover';
import { useRecoilState } from 'recoil';

import {
  StyledIconButton,
  StyledList,
  StyledListItem,
  StyledListItemAvatar,
} from 'src/pages/Opportunities/TopBar/Filters/FilterItem/FilterItem.styles';
import {
  FeeBox,
  FeeInput,
  FeeSlider,
} from 'src/pages/Opportunities/TopBar/Filters/SliderFilter/SliderFilter.styles';
import {
  type FilterKeys,
  opportunityFiltersAtom,
} from 'src/recoil/opportunity';

interface IProps {
  label: string;
  stateKey1: FilterKeys;
  stateKey2: FilterKeys;
  onChange: () => void;
}

const SliderFilter = ({
  stateKey1,
  stateKey2,
  onChange,
}: IProps): React.ReactElement => {
  const [filters, setFilters] = useRecoilState(opportunityFiltersAtom);
  const [inputValue, setValue] = useState([10, 750]);

  const handleValue = (event: Event, newValue: number | number[]): void => {
    setValue(newValue as number[]);
    setFilters({
      ...filters,
      [stateKey1]: inputValue[0],
      [stateKey2]: inputValue[1],
    });
  };

  return (
    <StyledListItem onChange={onChange}>
      <StyledListItemAvatar>
        <Checkbox value="all1" size="small" readOnly />
      </StyledListItemAvatar>
      <PopupState variant="popover" popupId="mouse-over-popover">
        {(popupState) => (
          <>
            <ListItemText>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between">
                <Typography fontSize="12pt">Fee</Typography>
                <Box display="flex">
                  <Typography marginRight="5px"></Typography>
                  <StyledIconButton {...bindHover(popupState)}>
                    <ChevronRight />
                  </StyledIconButton>
                </Box>
              </Box>
            </ListItemText>
            <HoverPopover
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}>
              <StyledList
                subheader={
                  <ListSubheader component="div" id="filter-subheader">
                    € /day
                  </ListSubheader>
                }>
                <FeeBox>
                  <FeeInput
                    type="number"
                    placeholder="50 €"
                    value={inputValue[0]}
                  />
                  <FeeSlider
                    min={50}
                    max={2000}
                    step={50}
                    size="small"
                    value={inputValue}
                    onChange={handleValue}
                  />
                  <FeeInput
                    type="number"
                    placeholder="2000 €"
                    value={inputValue[1]}
                  />
                </FeeBox>
              </StyledList>
            </HoverPopover>
          </>
        )}
      </PopupState>
    </StyledListItem>
  );
};

export default SliderFilter;
