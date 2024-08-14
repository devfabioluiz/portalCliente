import { type ChangeEvent, type ReactElement, useState } from 'react';

import {
  FormContainer,
  StyldeSearchIcon,
  StyledInput,
} from 'src/pages/Opportunities/TopBar/Search/Search.styles';

interface IProps {
  onSubmit: (value: string) => void;
}

const Search = ({ onSubmit }: IProps): ReactElement => {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
    onSubmit(event.target.value);
  };

  return (
    <FormContainer component={'form'}>
      <StyledInput value={value} onChange={handleChange} placeholder="Search" />
      <StyldeSearchIcon fontSize="small" />
    </FormContainer>
  );
};

export default Search;
