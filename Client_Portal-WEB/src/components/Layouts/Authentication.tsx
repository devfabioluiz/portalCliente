import { Box, Grid } from '@mui/material';

import {
  StyledContainer,
  StyledImg,
  StyledLogo,
} from 'src/components/Layouts/Authentication.styles';
import theme from 'src/theme';

interface IProps {
  children: React.ReactNode;
}

// Layout to use on Authentication pages
const AuthLayout = ({ children }: IProps): React.ReactElement => {
  return (
    <StyledContainer>
      <Grid container>
        <StyledLogo src="/assets/nearshore-logo.svg" alt="nearshore-logo" />
        <Grid item bgcolor={theme.palette.lightGrey.main} xs={6}>
          <StyledImg>
            <img
              src="/assets/icons/login_illustration.svg"
              alt="login-illustration"
            />
          </StyledImg>
        </Grid>
        <Grid item xs={6}>
          <Box className="rightGrid">{children}</Box>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default AuthLayout;
