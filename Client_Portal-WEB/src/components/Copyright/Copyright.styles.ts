import styled from '@emotion/styled';
import { Box } from '@mui/material';

const Wrapper = styled(Box)(
  ({ theme }) => `
  display: flex;
  gap: 0.2rem;
  color: ${theme.palette.darkText.light};

  span {
    font-family: Poppins, 'sans-serif';
    font-weight: 400;
    font-size: 9px;
    line-height: 14px;
  }
`,
);

const StyledSpan = styled('span')(
  ({ theme }) => `
color: ${theme.palette.primary.main}`,
);

export { Wrapper, StyledSpan };
