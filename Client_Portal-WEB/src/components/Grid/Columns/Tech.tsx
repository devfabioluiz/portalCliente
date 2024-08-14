import type * as React from 'react';
import { useState } from 'react';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Box, Button, Typography } from '@mui/material';

import { Modal } from 'src/components/Modal';
import {
  Footer,
  Heading,
  ModalBodyContainer,
  StyledRoleTechContainer,
  StyledViewMoreTech,
  TechLabel,
} from 'src/pages/Consultants/Table/Grid/Grid.styles';

interface IProps {
  techs: string[] | undefined;
}

const Technologies = ({ techs }: IProps): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box gap="0.5rem" display="flex">
      <StyledRoleTechContainer key={0}>
        <Typography fontFamily="Helvetica" fontSize="12px">
          {techs?.[0]}
        </Typography>
      </StyledRoleTechContainer>
      <StyledViewMoreTech
        onClick={() => {
          setIsOpen(true);
        }}>
        <MoreHorizIcon />
      </StyledViewMoreTech>
      <Modal
        isOpen={isOpen}
        onModalClose={() => {
          setIsOpen(false);
        }}
        renderHeader={<Heading>Technologies</Heading>}>
        <>
          <ModalBodyContainer>
            {techs?.map((tech) => (
              <TechLabel key={tech}>{tech}</TechLabel>
            ))}
          </ModalBodyContainer>
          <Footer>
            <Button
              variant="contained"
              onClick={() => {
                setIsOpen(false);
              }}>
              Close
            </Button>
          </Footer>
        </>
      </Modal>
    </Box>
  );
};

export default Technologies;
