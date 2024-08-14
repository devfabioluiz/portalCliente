import CopyrightIcon from '@mui/icons-material/Copyright';

import { StyledSpan, Wrapper } from 'src/components/Copyright/Copyright.styles';

const Copyright = (): React.ReactElement => {
  const currentYear = new Date().getFullYear();
  return (
    <Wrapper>
      <StyledSpan>
        <CopyrightIcon fontSize="inherit" color="primary" /> {currentYear} Prime
        Nearshore.
      </StyledSpan>
      <span>All rights reserved by Prime Nearshore</span>
    </Wrapper>
  );
};

export default Copyright;
