import { useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { CheckBox, CheckBoxOutlineBlank } from '@mui/icons-material';
import {
  Box,
  Dialog,
  DialogContent,
  InputAdornment,
  RadioGroup,
  Typography,
} from '@mui/material';

import { useRoles } from 'src/api/role/role';
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
  StyledControlLabel,
  StyledDialogTitle,
  StyledRadioButton,
  StyledSearchIcon,
  SubHeading,
} from 'src/pages/Opportunities/TopBar/CreateOpportunity/sections/Role/RoleModal/RoleModal.styles';

interface IProps {
  open: boolean;
  onClose: () => void;
}

const RoleModal = ({ open, onClose }: IProps): React.ReactElement => {
  const { register } = useFormContext<CreateOpportunityFormType>();
  const [selected, setSelected] = useState<string>('');
  const selectedName = useRef('');
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string,
  ): void => {
    setSelected(value);
    selectedName.current = event.target.labels?.[0].outerText ?? '';
  };
  const [search, setSearch] = useState<string>('');
  const debouncedSearch = useDebounce(search);

  const roles = useRoles({ search: debouncedSearch });

  const onModalClose = (): void => {
    onClose();
    setSelected('');
  };

  const onAdd = (): void => {
    register('role', { value: { id: selected, name: selectedName.current } });
    onModalClose();
  };

  const { shadow, onScrollHandler } = useScrollWithShadow();

  return (
    <>
      <Dialog open={open} scroll="paper" onClose={onClose} maxWidth="md">
        <StyledDialogTitle>
          <Box display="flex">
            <Heading>Add Role</Heading>
            <SubHeading>Select one</SubHeading>
          </Box>
          <CloseButton onClick={onModalClose} disableRipple>
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
        </StyledDialogTitle>
        <DialogContent>
          <OptionsContainer
            onScroll={onScrollHandler}
            sx={{ maskImage: shadow }}>
            {roles?.data?.length ? (
              <RadioGroup value={selected} onChange={handleChange} name="role">
                {roles.data.map((option) => (
                  <StyledControlLabel
                    key={option.id}
                    control={
                      <StyledRadioButton
                        icon={<CheckBoxOutlineBlank />}
                        checkedIcon={<CheckBox />}
                        size="small"
                      />
                    }
                    label={option.name}
                    value={option.id}
                  />
                ))}
              </RadioGroup>
            ) : (
              <Typography>Empty</Typography>
            )}
          </OptionsContainer>
        </DialogContent>
        <Footer>
          <AddButton onClick={onAdd} disabled={selected === ''}>
            Add
          </AddButton>
        </Footer>
      </Dialog>
    </>
  );
};

export default RoleModal;
