import { forwardRef, useState } from 'react';
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import dayjs from 'dayjs';

import { CreateOpportunitySchema, useCreateOpportunity } from 'src/api';
import {
  CreateOpportunityFormSchema,
  type CreateOpportunityFormType,
} from 'src/pages/Opportunities/TopBar/CreateOpportunity/CreateOpportunity.schema';
import {
  ANIMATION_DURATION,
  CloseButton,
  CloseIcon,
  FormContainer,
  Heading,
  SaveButton,
  Spinner,
  StyledBox,
} from 'src/pages/Opportunities/TopBar/CreateOpportunity/CreateOpportunity.styles';
import { SalaryRange } from 'src/pages/Opportunities/TopBar/CreateOpportunity/SalaryRange';
import ClientSection from 'src/pages/Opportunities/TopBar/CreateOpportunity/sections/Client';
import DescriptionSection from 'src/pages/Opportunities/TopBar/CreateOpportunity/sections/Description';
import LevelSection from 'src/pages/Opportunities/TopBar/CreateOpportunity/sections/Level';
import LocationSection from 'src/pages/Opportunities/TopBar/CreateOpportunity/sections/Location';
import PositionsSection from 'src/pages/Opportunities/TopBar/CreateOpportunity/sections/Positions';
import ProjectSection from 'src/pages/Opportunities/TopBar/CreateOpportunity/sections/Project';
import RoleSection from 'src/pages/Opportunities/TopBar/CreateOpportunity/sections/Role/Role';
import TechnologySection from 'src/pages/Opportunities/TopBar/CreateOpportunity/sections/Technology/Technology';

interface IProps {
  handleClose: () => void;
}

const CreateOpportunity = forwardRef(function CreateOpportunity(
  { handleClose }: IProps,
  ref,
): React.ReactElement {
  const { isLoading, ...createOpportunity } = useCreateOpportunity();
  const [closeAnimation, setCloseAnimation] = useState<boolean>(false);

  const onModalClose = (): void => {
    setCloseAnimation(true);
    setTimeout(() => {
      handleClose();
    }, ANIMATION_DURATION);
  };

  const methods = useForm<CreateOpportunityFormType>({
    resolver: zodResolver(CreateOpportunityFormSchema),
    defaultValues: { salary: [10, 2000] },
  });

  const submit: SubmitHandler<CreateOpportunityFormType> = async ({
    customer,
    project,
    role,
    level,
    technologies,
    numOfRequestedPositions,
    description,
    salary,
    location,
  }): Promise<void> => {
    const technologyIds = technologies.map((techs) => techs.id);
    await createOpportunity.mutateAsync(
      CreateOpportunitySchema.parse({
        openDate: dayjs().toDate().toISOString(),
        customerId: customer.id,
        projectId: project.id,
        roleId: role.id,
        levelId: level.id,
        numOfRequestedPositions,
        description,
        technologyIds,
        salaryMinimum: salary[0],
        salaryMaximum: salary[1],
        location,
      }),
      {
        onSuccess: () => {
          onModalClose();
        },
      },
    );
  };

  return (
    <FormProvider {...methods}>
      <FormContainer
        component="form"
        onSubmit={methods.handleSubmit(submit)}
        closeAnimation={closeAnimation}>
        <StyledBox>
          <CloseButton onClick={onModalClose} disableRipple>
            <CloseIcon />
          </CloseButton>
        </StyledBox>
        <Heading>Create Opportunity</Heading>

        <ClientSection />
        <ProjectSection />
        <RoleSection />
        <LevelSection />
        <PositionsSection registerMethod={methods.register} />
        <DescriptionSection registerMethod={methods.register} />
        <TechnologySection />
        <SalaryRange />
        <LocationSection registerMethod={methods.register} />

        <SaveButton type="submit" disabled={!methods.formState.isValid}>
          {isLoading ? <Spinner size={20} /> : `Save`}
        </SaveButton>
      </FormContainer>
    </FormProvider>
  );
});

export default CreateOpportunity;
