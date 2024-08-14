import styled from '@emotion/styled';
import { InputLabel, OutlinedInput } from '@mui/material';

const Label = styled(InputLabel)`
  color: primary;
`;

const StyledField = styled(OutlinedInput)(
  ({ theme }) => `
  width: auto;
  color: ${theme.palette.darkText.main};

  &:hover {
    .MuiOutlinedInput-notchedOutline {
      border-color: ${theme.palette.primary.main};
    }
  }

  .MuiOutlinedInput-notchedOutline {
    border: 1px solid ${theme.palette.darkText.light};
  }
`,
);

export { Label, StyledField };
