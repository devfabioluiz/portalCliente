import { type ReactElement } from 'react';

import { useCustomers } from 'src/api';
import CustomSelect from 'src/pages/Opportunities/TopBar/CreateOpportunity/CustomSelect/CustomSelect';

const ClientSection = (): ReactElement => {
  const customers = useCustomers();

  return (
    <CustomSelect
      label="Client"
      name="customer"
      placeholder="Select Client"
      options={customers.data ?? []}
    />
  );
};

export default ClientSection;
