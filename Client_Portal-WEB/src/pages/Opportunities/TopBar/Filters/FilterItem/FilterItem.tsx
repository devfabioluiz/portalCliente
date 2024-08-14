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

import { type IOption } from 'src/pages/Opportunities/TopBar/CreateOpportunity/CreateOpportunity.types';
import {
  StyledBox,
  StyledIconButton,
  StyledList,
  StyledListItem,
  StyledListItemAvatar,
} from 'src/pages/Opportunities/TopBar/Filters/FilterItem/FilterItem.styles';
import {
  type FilterKeys,
  opportunityFiltersAtom,
} from 'src/recoil/opportunity';

interface IProps {
  label: string;
  stateKey: FilterKeys;
  data: IOption[];
  onClick: () => void;
}

const FilterItem = ({
  label,
  stateKey,
  data,
  onClick,
}: IProps): React.ReactElement => {
  const [filters, setFilters] = useRecoilState(opportunityFiltersAtom);

  const isAllSelected =
    data.length > 0 && filters[stateKey].length === data.length;
  const isIndeterminate =
    data.length > 0 &&
    filters[stateKey].length > 0 &&
    filters[stateKey].length < data.length;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;

    if (value === 'all' || value === 'all1') {
      const newFilters = {
        ...filters,
        [stateKey]:
          filters[stateKey].length === data.length
            ? []
            : data.map((item) => item.id),
      };
      setFilters(newFilters);
      return;
    }
    const list = [...filters[stateKey]];
    const index = list.indexOf(value);
    if (index === -1) {
      list.push(value);
    } else {
      list.splice(index, 1);
    }

    setFilters({ ...filters, [stateKey]: list });
  };

  const isChecked = (id: string): boolean => {
    const selectedFilters = filters[stateKey] as string[];
    return selectedFilters.includes(id);
  };

  return (
    <StyledListItem onClick={onClick}>
      <StyledListItemAvatar>
        <Checkbox
          value="all1"
          size="small"
          readOnly
          checked={isAllSelected}
          indeterminate={isIndeterminate}
          onChange={handleChange}
        />
      </StyledListItemAvatar>
      <PopupState variant="popover" popupId="mouse-over-popover">
        {(popupState) => (
          <>
            <ListItemText>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between">
                <Typography fontSize="12pt">{label}</Typography>
                <Box display="flex">
                  <Typography marginRight="5px">
                    {filters[stateKey].length}
                  </Typography>
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
                    {label}
                  </ListSubheader>
                }>
                <StyledBox>
                  <StyledListItem>
                    <StyledListItemAvatar>
                      <Checkbox
                        value="all"
                        size="small"
                        onChange={handleChange}
                        checked={isAllSelected}
                      />
                    </StyledListItemAvatar>
                    <ListItemText>
                      <Typography fontSize="12pt">Select All</Typography>
                    </ListItemText>
                  </StyledListItem>
                  {data.map((item) => (
                    <StyledListItem key={item.id} sx={{ cursor: 'pointer' }}>
                      <StyledListItemAvatar>
                        <Checkbox
                          size="small"
                          value={item.id}
                          onChange={handleChange}
                          checked={isChecked(item.id)}
                        />
                      </StyledListItemAvatar>
                      <ListItemText>
                        <Typography fontSize="12pt">{item.name}</Typography>
                      </ListItemText>
                    </StyledListItem>
                  ))}
                </StyledBox>
              </StyledList>
            </HoverPopover>
          </>
        )}
      </PopupState>
    </StyledListItem>
  );
};

export default FilterItem;
