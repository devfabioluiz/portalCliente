import { useLocation, useNavigate } from 'react-router-dom';

import {
  StyledBox,
  StyledButton,
  StyledContainer,
} from 'src/pages/Opportunities/Navigation/Navigation.styles';
import { pages } from 'src/pages/Opportunities/Navigation/constants';

const Navigation = (): React.ReactElement => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <StyledContainer>
      <StyledBox>
        {pages.map((page) => {
          return (
            <StyledButton
              key={page.title}
              className={pathname === page.pathname ? 'active' : ''}
              onClick={() => {
                if (page.pathname) {
                  navigate(page.pathname);
                }
              }}>
              {page.title}
            </StyledButton>
          );
        })}
      </StyledBox>
    </StyledContainer>
  );
};

export default Navigation;
