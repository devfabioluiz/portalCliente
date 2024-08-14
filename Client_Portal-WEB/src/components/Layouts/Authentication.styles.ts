import styled from '@emotion/styled';
import { Box, Button, Grid } from '@mui/material';

// Auth page layout styling
const StyledLogo = styled('img')`
  position: absolute;
  top: 50px;
  left: 50px;
  z-index: 1;
`;

const StyledImg = styled(Box)`
  display: flex;
  margin: 0 50px;

  img {
    width: 100%;
    height: auto;
  }
`;

const StyledContainer = styled(Grid)`
  display: flex;
  min-height: 100vh;
  position: relative;

  .MuiGrid-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }

  .rightGrid {
    width: 70%;
    margin: 50px auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const SignInButton = styled(Button)`
  filter: drop-shadow(0px 2px 4px rgba(54, 54, 54, 0.353));
  background: linear-gradient(180deg, #6939e8 0%, #5536d6 100%);
  height: 52px;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
`;

export { StyledLogo, StyledImg, StyledContainer, SignInButton };
