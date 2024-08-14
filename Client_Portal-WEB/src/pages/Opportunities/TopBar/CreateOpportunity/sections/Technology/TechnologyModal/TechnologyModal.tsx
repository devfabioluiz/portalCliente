import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  InputAdornment,
  Typography,
} from '@mui/material';

import { useTechnologies } from 'src/api';
import useDebounce from 'src/hooks/useDebounce';
import { useScrollWithShadow } from 'src/hooks/useScrollWithShadow';
import { type CreateOpportunityFormType } from 'src/pages/Opportunities/TopBar/CreateOpportunity/CreateOpportunity.schema';
import {
  AddButton,
  CloseButton,
  CloseIcon,
  Footer,
  Heading,
  OptionsContainer,
  SearchField,
  StyledCheckbox,
  StyledControlLabel,
  StyledSearchIcon,
  SubHeading,
} from 'src/pages/Opportunities/TopBar/CreateOpportunity/sections/Technology/TechnologyModal/TechnologyModal.styles';

interface IProps {
  open: boolean;
  onClose: () => void;
}

const TechnologyModal = ({ open, onClose }: IProps): React.ReactElement => {
  const { register, watch } = useFormContext<CreateOpportunityFormType>();

  const { shadow, onScrollHandler } = useScrollWithShadow();
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const [search, setSearch] = useState<string>('');
  const debouncedSearch = useDebounce(search);
  const techs = useTechnologies({ filterValue: debouncedSearch });

  useEffect(() => {
    const selectedTechnologies = (watch('technologies') ?? []).map(
      (tech) => tech.id,
    );
    setSelected(new Set(selectedTechnologies));
  }, [open, watch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSelected((prevState) =>
      prevState.has(e.target.value)
        ? new Set([...prevState].filter((item) => item !== e.target.value))
        : new Set([...prevState, e.target.value]),
    );
  };

  const onAdd = (): void => {
    const technologies = techs.data.filter((option) => selected.has(option.id));
    register('technologies', { value: technologies });
    onClose();
  };

  return (
    <Dialog open={open} scroll="paper" onClose={onClose} maxWidth="md">
      <DialogTitle sx={{ width: '400px' }}>
        <Box display="flex">
          <Heading>Add Technologies</Heading>
          <SubHeading>Select multiple</SubHeading>
        </Box>
        <CloseButton onClick={onClose} disableRipple>
          <CloseIcon />
        </CloseButton>
        <SearchField
          placeholder="Search"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
          endAdornment={
            <InputAdornment position="end">
              <StyledSearchIcon />
            </InputAdornment>
          }
          disableUnderline
        />
      </DialogTitle>
      <DialogContent>
        {techs?.data?.length ? (
          <OptionsContainer
            onScroll={onScrollHandler}
            sx={{ maskImage: shadow }}>
            {techs.data.map((option) => (
              <StyledControlLabel
                key={option.id}
                control={
                  <StyledCheckbox
                    size="small"
                    value={option.id}
                    checked={selected.has(option.id)}
                    onChange={handleChange}
                  />
                }
                label={option.name}
              />
            ))}
          </OptionsContainer>
        ) : (
          <Typography>Empty</Typography>
        )}
      </DialogContent>
      <Footer>
        <AddButton onClick={onAdd} disabled={selected.size === 0}>
          Add
        </AddButton>
      </Footer>
    </Dialog>
  );
};

export default TechnologyModal;
