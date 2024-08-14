import { forwardRef, useState } from 'react';
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import dayjs from 'dayjs';

import {
  CreateOpportunitySchema,
  useEditOpportunity,
  useGetOpportunity,
} from 'src/api';
import {
  ANIMATION_DURATION,
  CloseButton,
  CloseIcon,
  FormContainer,
  Heading,
  SaveButton,
  StyledBox,
} from 'src/pages/Opportunities/EditOpportunity/EditOpportunity.styles';
import {
  CreateOpportunityFormSchema,
  type CreateOpportunityFormType,
} from 'src/pages/Opportunities/TopBar/CreateOpportunity/CreateOpportunity.schema';
import { Spinner } from 'src/pages/Opportunities/TopBar/CreateOpportunity/CreateOpportunity.styles';
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
  opportunityId: string;
  handleClose: () => void;
}

const EditOpportunity = forwardRef(function EditOpportunity(
  { opportunityId, handleClose }: IProps,
  ref,
): React.ReactElement {
  const { ...editOpportunity } = useEditOpportunity(opportunityId);
  const [closeAnimation, setCloseAnimation] = useState<boolean>(false);
  const { isLoading, data } = useGetOpportunity(opportunityId);

  const onModalClose = (): void => {
    setCloseAnimation(true);
    setTimeout(() => {
      handleClose();
    }, ANIMATION_DURATION);
  };

  const methods = useForm<CreateOpportunityFormType>({
    resolver: zodResolver(CreateOpportunityFormSchema),
    defaultValues: {
      project: data?.project,
      customer: data?.customer,
      role: data?.role,
      level: data?.level,
      technologies: data?.technologies,
      numOfRequestedPositions: data?.numOfRequestedPositions,
      description: data?.description,
      salary: [data?.salaryMinimum, data?.salaryMaximum],
      location: data?.location,
    },
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
    await editOpportunity.mutateAsync(
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
      {isLoading ? (
        <Spinner size={20} />
      ) : (
        <FormContainer
          component="form"
          onSubmit={methods.handleSubmit(submit)}
          closeAnimation={closeAnimation}>
          <StyledBox>
            <CloseButton onClick={onModalClose} disableRipple>
              <CloseIcon />
            </CloseButton>
          </StyledBox>
          <Heading>Edit Opportunity</Heading>
          <ClientSection />
          <ProjectSection />
          <RoleSection />
          <LevelSection />
          <PositionsSection registerMethod={methods.register} />
          <DescriptionSection registerMethod={methods.register} />
          <TechnologySection />
          <SalaryRange />
          <LocationSection registerMethod={methods.register} />
          <SaveButton type="submit">{`Save`}</SaveButton>
        </FormContainer>
      )}
    </FormProvider>
  );
});

export default EditOpportunity;
