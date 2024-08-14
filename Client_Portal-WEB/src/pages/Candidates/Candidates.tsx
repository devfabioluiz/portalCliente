import MainLayout from 'src/components/Layouts/Main';
import Table from 'src/pages/Candidates/Table/Table';
import Navigation from 'src/pages/Opportunities/Navigation/Navigation';

const Candidates = (): React.ReactElement => {
  return (
    <>
      <Navigation />
      <MainLayout />
      <Table />
    </>
  );
};

export default Candidates;
