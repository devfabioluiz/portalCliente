import styled from '@emotion/styled';
import { Box, Button, Link, Typography } from '@mui/material';

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: inherit;
  gap: 40px;
`;

const StyledTypography = styled(Typography)(
  ({ theme }) => `
    color: ${theme.palette.purpleText.main};
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    margin: 0 0 8px 0;
`,
);

const StyledButton = styled(Button)`
  filter: drop-shadow(0px 2px 4px rgba(54, 54, 54, 0.353));
  background: linear-gradient(180deg, #6939e8 0%, #5536d6 100%);
  height: 52px;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
`;

const StyledLink = styled(Link)(
  ({ theme }) => `
  text-align: center;
  font-weight: 700;
  text-decoration: none;
  font-family: Poppins, 'sans-serif';
  color: ${theme.palette.purpleText.main};
  cursor: pointer;
`,
);

export { StyledBox, StyledButton, StyledTypography, StyledLink };
