import { type ReactElement } from 'react';

import { useProjects } from 'src/api';
import CustomSelect from 'src/pages/Opportunities/TopBar/CreateOpportunity/CustomSelect/CustomSelect';

const ProjectSection = (): ReactElement => {
  const projects = useProjects();

  return (
    <CustomSelect
      label="Project"
      name="project"
      placeholder="Select Project"
      options={projects.data ?? []}
    />
  );
};

export default ProjectSection;
