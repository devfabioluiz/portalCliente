import MainLayout from 'src/components/Layouts/Main';
import Navigation from 'src/pages/Opportunities/Navigation/Navigation';
import Table from 'src/pages/Opportunities/Table/Table';

const Opportunities = (): React.ReactElement => {
  return (
    <>
      <Navigation />
      <MainLayout />
      <Table />
    </>
  );
};

export default Opportunities;
