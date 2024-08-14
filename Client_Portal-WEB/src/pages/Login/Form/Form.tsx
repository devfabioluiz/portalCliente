import type React from 'react';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, InputAdornment, Typography } from '@mui/material';

import { useLogin } from 'src/api';
import CustomTextField from 'src/components/TextField/TextField';
import {
  CustomizedForm,
  ForgotPass,
  SignInButton,
  Spinner,
} from 'src/pages/Login/Login.styles';

const Form = (): React.ReactElement => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const { mutate: loginUser, isLoading } = useLogin();

  const handleLogInClick = useCallback(() => {
    loginUser({ email, password });
  }, [email, password, loginUser]);

  const isButtonDisabled =
    isLoading || email.length === 0 || password.length === 0;

  return (
    <Box
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        handleLogInClick();
      }}>
      <CustomizedForm fullWidth>
        <Typography variant="h1">
          <b>Welcome!</b> Join our human resources management platform.
        </Typography>
        <Box className="inputs">
          <CustomTextField
            label="Enter your email"
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <CustomTextField
            label="Enter your password"
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            endAdornment={
              <InputAdornment position="end">
                <ForgotPass
                  variant="text"
                  color="primary"
                  size="small"
                  onClick={() => {
                    navigate('/forgot-password');
                  }}>
                  Forgot Password?
                </ForgotPass>
              </InputAdornment>
            }
          />
        </Box>
        <SignInButton
          disabled={isButtonDisabled}
          variant="contained"
          size="large"
          type="submit">
          {isLoading ? <Spinner size={22} /> : 'Sign In'}
        </SignInButton>
      </CustomizedForm>
    </Box>
  );
};

export default Form;
