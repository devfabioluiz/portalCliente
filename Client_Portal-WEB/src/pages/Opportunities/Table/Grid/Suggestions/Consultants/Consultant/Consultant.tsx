import { type ChangeEvent, type ReactElement, useState } from 'react';

import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Box, Checkbox, IconButton, Typography } from '@mui/material';

import { useSetRecoilState } from 'recoil';

import {
  AvatarContainer,
  ConsultantContainer,
  ConsultantDataContainer,
  ConsultantHeaderContainer,
  ConsultantName,
  ConsultantTitle,
} from 'src/pages/Opportunities/Table/Grid/Suggestions/Consultants/Consultant/Consultant.styles';
import { ConsultantDetails } from 'src/pages/Opportunities/Table/Grid/Suggestions/Consultants/Consultant/Details';
import { suggestionsAtom } from 'src/recoil/suggestions';

interface IProps {
  id: string;
  name: string;
  role: string;
}

const Consultant = ({ name, id, role }: IProps): ReactElement => {
  const [isShowDetails, setIsShowDetails] = useState(false);
  const setSuggestions = useSetRecoilState(suggestionsAtom);

  const handleCheckboxClick = (e: ChangeEvent<HTMLInputElement>): void => {
    setSuggestions((oldSuggestions) => ({
      ...oldSuggestions,
      [id]: {
        ...oldSuggestions[id],
        isSelected: e.target.checked,
      },
    }));
    setIsShowDetails(true);
  };

  const [userName, lastName] = name.split(' ');
  const userInitials = `${userName[0]}${lastName[0] || ''}`;

  return (
    <ConsultantContainer key={id}>
      <ConsultantHeaderContainer>
        <ConsultantDataContainer>
          <Checkbox size="small" onChange={handleCheckboxClick} />
          <AvatarContainer>
            <Typography>{userInitials}</Typography>
          </AvatarContainer>
          <Box ml={1}>
            <ConsultantName>{name}</ConsultantName>
            <ConsultantTitle>{role}</ConsultantTitle>
          </Box>
        </ConsultantDataContainer>
        <IconButton
          onClick={() => {
            setIsShowDetails(!isShowDetails);
          }}>
          {isShowDetails ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
      </ConsultantHeaderContainer>

      {isShowDetails && <ConsultantDetails id={id} />}
    </ConsultantContainer>
  );
};

export default Consultant;
