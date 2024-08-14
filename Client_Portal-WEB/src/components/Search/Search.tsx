import {
  type ChangeEvent,
  type FormEventHandler,
  type ReactElement,
  useState,
} from 'react';

import { Search as SearchIcon } from '@mui/icons-material';
import { IconButton, InputBase } from '@mui/material';

import { FormContainer } from 'src/components/Search/Search.styles';

interface IProps {
  onSubmit: (value: string) => void;
}

const Search = ({ onSubmit }: IProps): ReactElement => {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <FormContainer component={'form'} onSubmit={handleSubmit}>
      <InputBase
        value={value}
        onChange={handleChange}
        placeholder="Search"
        sx={{ fontSize: '12px', flex: 1 }}
      />
      <IconButton type="submit" sx={{ padding: 0 }} size={'small'}>
        <SearchIcon fontSize="inherit" />
      </IconButton>
    </FormContainer>
  );
};

export default Search;
