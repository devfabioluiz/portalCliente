import MainLayout from 'src/components/Layouts/Main';
import Table from 'src/pages/Consultants/Table/Table';
import Navigation from 'src/pages/Opportunities/Navigation/Navigation';

const Consultants = (): React.ReactElement => {
  return (
    <>
      <Navigation />
      <MainLayout />
      <Table />
    </>
  );
};

export default Consultants;
