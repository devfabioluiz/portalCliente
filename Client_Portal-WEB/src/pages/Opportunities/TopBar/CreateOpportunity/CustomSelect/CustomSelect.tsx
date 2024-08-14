// Need to move it to components folder
import { Controller, useFormContext } from 'react-hook-form';

import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { Autocomplete, TextField } from '@mui/material';

import { type CreateOpportunityFormType } from 'src/pages/Opportunities/TopBar/CreateOpportunity/CreateOpportunity.schema';
import { type IOption } from 'src/pages/Opportunities/TopBar/CreateOpportunity/CreateOpportunity.types';
import { StyledFormControl } from 'src/pages/Opportunities/TopBar/CreateOpportunity/CustomSelect/CustomSelect.styles';
import theme from 'src/theme';

interface IProps {
  label: string;
  name: keyof Pick<CreateOpportunityFormType, 'customer' | 'project' | 'level'>;
  placeholder: string;
  options: IOption[];
}

const CustomSelect = ({
  label,
  name,
  placeholder,
  options,
}: IProps): React.ReactElement => {
  const { control } = useFormContext<CreateOpportunityFormType>();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <StyledFormControl>
          {label}
          <Autocomplete
            size="small"
            popupIcon={<KeyboardArrowDownRoundedIcon />}
            getOptionLabel={(option: IOption) => option.name}
            renderInput={(params) => (
              <TextField {...params} placeholder={placeholder} />
            )}
            options={options}
            autoSelect
            autoComplete
            sx={{
              width: '100%',
              '& input': {
                fontSize: '12px',
              },
              '& .MuiAutocomplete-popupIndicator': {
                color: `${theme.palette.darkText.light}`,
              },
            }}
            onChange={(e, item) => {
              onChange(item);
            }}
            value={value as IOption | null}
            inputValue={value?.name ?? ''}
            isOptionEqualToValue={(option, value) => option.id === value.id}
          />
        </StyledFormControl>
      )}
    />
  );
};

export default CustomSelect;
