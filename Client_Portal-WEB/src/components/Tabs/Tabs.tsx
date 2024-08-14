import type React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Box } from '@mui/material';

import {
  StyledBox,
  StyledLinkTab,
  StyledTabs,
} from 'src/components/Tabs/Tabs.styles';
import { type ITabItem } from 'src/components/Tabs/Tabs.types';
import { tabsContent } from 'src/components/Tabs/constants';

interface IProps {
  component: React.ReactElement;
}

const NavTabs = (props: IProps): React.ReactElement => {
  const [value, setValue] = useState<boolean | number>(false);
  const location = useLocation();

  const handleChange = useCallback(
    (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    },
    [],
  );

  useEffect(() => {
    const currentTab: ITabItem | undefined = tabsContent.find(
      (item) => item.href === location.pathname,
    );
    if (currentTab != null) setValue(currentTab.value);
  }, [location]);

  return (
    <Box>
      <StyledBox>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example">
          {tabsContent.map((props: ITabItem) => (
            <StyledLinkTab key={props.value} {...props} />
          ))}
        </StyledTabs>
      </StyledBox>
      {/* Tab Panel component */}
      {props.component}
    </Box>
  );
};

export default NavTabs;
