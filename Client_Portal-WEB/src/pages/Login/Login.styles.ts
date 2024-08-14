import styled from '@emotion/styled';
import { Box, Button, CircularProgress, FormControl } from '@mui/material';

// Form styling
const CustomizedForm = styled(FormControl)(
  ({ theme }) => `
  display: flex;
  gap: 40px;

  h1 {
    color: ${theme.palette.purpleText.main};
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    margin: 0 0 8px 0;
  }

  .inputs {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`,
);

// Login page styling
const SignInText = styled('span')(
  ({ theme }) => `
  display: flex;
  flex-direction: row;
  gap: 20px;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  color: ${theme.palette.darkText.main};
  margin-left: calc(-24px - 20px);
`,
);

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: inherit;
`;

const SignInButton = styled(Button)`
  filter: drop-shadow(0px 2px 4px rgba(54, 54, 54, 0.353));
  background: linear-gradient(180deg, #6939e8 0%, #5536d6 100%);
  height: 52px;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  &:disabled {
    opacity: 0.5;
  }
`;

const ForgotPass = styled(Button)`
  font-size: 12px;
`;

const Rights = styled(Box)(
  ({ theme }) => `
  display: flex;
  gap: 0.2rem;

  span {
    font-weight: 400;
    font-size: 9px;
    line-height: 14px;
    color: ${theme.palette.darkText.light};

    &.color {
      color: ${theme.palette.purpleText.main};
    }
  }
`,
);

const Spinner = styled(CircularProgress)(
  () => `
  color: white
`,
);

export {
  CustomizedForm,
  SignInText,
  StyledBox,
  SignInButton,
  ForgotPass,
  Rights,
  Spinner,
};
