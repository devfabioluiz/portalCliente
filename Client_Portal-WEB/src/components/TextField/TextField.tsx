import type React from 'react';

import { FormControl, type OutlinedInputProps } from '@mui/material';

import { Label, StyledField } from 'src/components/TextField/TextField.styles';

interface IProps extends OutlinedInputProps {
  label: string;
}

const CustomTextField = (props: IProps): React.ReactElement => {
  const { label } = props;

  return (
    <FormControl>
      <Label>{label}</Label>
      <StyledField {...props} />
    </FormControl>
  );
};

export default CustomTextField;
