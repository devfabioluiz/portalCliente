import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import Copyright from 'src/components/Copyright/Copyright';
import AuthLayout from 'src/components/Layouts/Authentication';
import CustomTextField from 'src/components/TextField/TextField';
import {
  StyledBox,
  StyledButton,
  StyledLink,
  StyledTypography,
} from 'src/pages/ForgotPassword/ForgotPassword.styles';
import { forgotPassword } from 'src/pages/ForgotPassword/constants';

const ForgotPassword = (): React.ReactElement => {
  const { pageTitle, textField, btnText, linkText } = forgotPassword;
  const navigate = useNavigate();

  const handleBtnClick: () => void = useCallback(() => {
    return null;
  }, []);

  return (
    <AuthLayout>
      <StyledBox>
        <StyledTypography variant="h1">{pageTitle}</StyledTypography>
        <CustomTextField label={textField.label} type={textField.type} />
        <StyledButton
          variant="contained"
          size="large"
          onClick={() => handleBtnClick}>
          {btnText}
        </StyledButton>
        <StyledLink
          onClick={() => {
            navigate('/login');
          }}>
          {linkText}
        </StyledLink>
      </StyledBox>
      <Copyright />
    </AuthLayout>
  );
};

export default ForgotPassword;
