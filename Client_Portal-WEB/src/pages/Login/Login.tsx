import type React from 'react';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import Copyright from 'src/components/Copyright/Copyright';
import AuthLayout from 'src/components/Layouts/Authentication';
import Form from 'src/pages/Login/Form/Form';
import { SignInText, StyledBox } from 'src/pages/Login/Login.styles';

const Login = (): React.ReactElement => (
  <AuthLayout>
    <StyledBox>
      <SignInText>
        <ArrowRightAltIcon />
        Sign in
      </SignInText>
      <Form />
      <Copyright />
    </StyledBox>
  </AuthLayout>
);

export default Login;
