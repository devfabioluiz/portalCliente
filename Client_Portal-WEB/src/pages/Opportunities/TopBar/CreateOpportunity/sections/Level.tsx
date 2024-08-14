import { type ReactElement } from 'react';

import { useLevels } from 'src/api';
import CustomSelect from 'src/pages/Opportunities/TopBar/CreateOpportunity/CustomSelect/CustomSelect';

const LevelSection = (): ReactElement => {
  const levels = useLevels();

  return (
    <CustomSelect
      label="Level"
      name="level"
      placeholder="Select Level"
      options={levels.data ?? []}
    />
  );
};

export default LevelSection;
