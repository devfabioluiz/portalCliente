import { useState } from 'react';

import { StyledLogo } from 'src/components/Layouts/Main.styles';
import LeftMenu from 'src/components/LeftSideMenu/LeftSideMenu';
import TopBar from 'src/components/TopBar/TopBar';

const MainLayout = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <TopBar />
      <LeftMenu
        onMenuOpen={(state) => {
          setIsOpen(state);
        }}
      />
      <StyledLogo
        src="/assets/nearshore-logo.svg"
        alt="nearshore-logo"
        style={{ transform: isOpen ? 'scale(1.8)' : 'none' }}
      />
    </>
  );
};

export default MainLayout;
