import { type Dispatch, type SetStateAction } from 'react';

import {
  DataGrid,
  type GridColDef,
  type GridRenderCellParams,
} from '@mui/x-data-grid';

import { useRecoilValue } from 'recoil';

import { type PaginatedApiResponse } from 'src/api';
import { UserRole } from 'src/api/shared/User.types';
import { FileView } from 'src/components/FileView';
import Decision from 'src/components/Grid/Columns/Decision';
import Notes from 'src/components/Grid/Columns/Notes';
import Status from 'src/components/Grid/Columns/Status';
import { Interview } from 'src/pages/Candidates/Interview';
import Options from 'src/pages/Candidates/Table/Grid/Columns/Options';
import { StyledTag } from 'src/pages/Candidates/Table/Grid/Grid.styles';
import {
  type IBodyRows,
  type IDecisionColumn,
} from 'src/pages/Candidates/Table/Grid/Grid.types';
import { ITEMS_PER_PAGE } from 'src/pages/Candidates/Table/Table';
import TopBar from 'src/pages/Candidates/TopBar/TopBar';
import { userAtomRole } from 'src/recoil/user/user.selectors';

interface IProps {
  paginatedQueryResult: PaginatedApiResponse<IBodyRows>;
  setPage: Dispatch<SetStateAction<number>>;
}

const Grid = (props: IProps): React.ReactElement => {
  const userRole = useRecoilValue(userAtomRole);

  const isClient = userRole === UserRole.CLIENT;
  const isBusinessManager = userRole === UserRole.BUSINESS_MANAGER;
  const { paginatedQueryResult, setPage } = props;
  const { items: rows, totalCount } = paginatedQueryResult;

  const columns: GridColDef[] = [
    {
      field: 'identifier',
      headerName: 'ID',
      flex: 0.7,
      disableColumnMenu: true,
      renderCell: (params: GridRenderCellParams) => (
        <StyledTag>{params.value}</StyledTag>
      ),
      headerClassName: 'header',
      hideable: false,
    },
    {
      field: 'consultant',
      sortingOrder: ['desc', 'asc'],
      headerName: 'Candidates',
      flex: 1.5,
      disableColumnMenu: true,
      headerClassName: 'header',
    },
    {
      field: 'role',
      headerName: 'Role',
      sortingOrder: ['desc', 'asc'],
      flex: 1,
      disableColumnMenu: true,
      headerClassName: 'header',
    },
    {
      field: 'project',
      headerName: 'Project',
      sortingOrder: ['desc', 'asc'],
      flex: 1.5,
      disableColumnMenu: true,
      headerClassName: 'header',
    },
    {
      field: 'fee',
      headerName: 'Fee',
      flex: 0.8,
      sortingOrder: ['desc', 'asc'],
      disableColumnMenu: true,
      headerClassName: 'header',
    },
    {
      field: 'client',
      headerName: 'Client',
      sortingOrder: ['desc', 'asc'],
      flex: 1.3,
      disableColumnMenu: true,
      headerClassName: 'header',
    },
    {
      field: 'businessManager',
      headerName: 'Business Manager',
      flex: 1.3,
      disableColumnMenu: true,
      headerClassName: 'header',
    },
    {
      field: 'accountOwner',
      headerName: 'Account Owner',
      flex: 1.3,
      disableColumnMenu: true,
      headerClassName: 'header',
    },
    {
      field: 'interview',
      headerName: 'Interview',
      flex: 1,
      disableColumnMenu: true,
      headerClassName: 'header',
      renderCell: (params: { row: { id: string } }) => (
        <Interview candidateId={params.row.id} />
      ),
    },
    {
      field: 'notes',
      headerName: 'Notes',
      flex: 0.8,
      disableColumnMenu: true,
      renderCell: (params: GridRenderCellParams<string>) => (
        <Notes notes={params.value} />
      ),
      headerClassName: 'header',
    },
    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
      disableColumnMenu: true,
      renderCell: (params: GridRenderCellParams<IBodyRows['status']>) =>
        params.value ? <Status statusMessage={params.value} /> : null,
      headerClassName: 'header',
    },
    {
      field: 'testFileUrl',
      headerName: 'Test',
      flex: 0.6,
      disableColumnMenu: true,
      renderCell: (
        params: GridRenderCellParams<IBodyRows['testFileUrl'] | undefined>,
      ) =>
        params.value ? <FileView fileURL={params.value} label="test" /> : null,
      headerClassName: 'header',
    },
    {
      field: 'cvFileUrl',
      headerName: 'CV',
      flex: 0.6,
      disableColumnMenu: true,
      renderCell: (
        params: GridRenderCellParams<IBodyRows['cvFileUrl'] | undefined>,
      ) => <FileView fileURL={params.value} label="cv" />,
      headerClassName: 'header',
    },
    // when a candidate is suggested by the business manager the status is "waiting" by default
    // if the status value is "waiting" the decision should be "waiting" as well
    // after the interview is scheduled the status will change to "#1 round" and the "GO" button should appear
    // The "GO" button will open a modal to accept the candidate for the opportunity
    {
      field: 'decision',
      headerName: 'Decision',
      flex: 1,
      disableColumnMenu: true,
      renderCell: (params: GridRenderCellParams<IDecisionColumn>) =>
        params.value?.status && params.value.candidate ? (
          <Decision
            status={params.value.status}
            candidate={{
              id: params.value.candidate.id,
              name: params.value.candidate.name,
            }}
          />
        ) : null,
      headerClassName: 'header',
    },
    {
      field: 'options',
      headerName: '',
      flex: 0.5,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params: { row: { id: string } }) => (
        <Options candidateId={params.row.id} />
      ),
      disableReorder: true,
      headerClassName: 'header end',
      hideable: false,
    },
  ];

  const row = rows.map((item) => ({
    id: item.id,
    identifier: `ID0000`,
    consultant: item.consultant.name,
    client: item.opportunity.customer.name,
    accountOwner: item.opportunity.customer.accountOwners
      .map((item) => item.fullName)
      .join(', '),
    cvFileUrl: item.cvFileUrl,
    project: item.opportunity.project.name,
    fee: `${item.salary}€`,
    role: item.opportunity.role.name,
    testFileUrl: item.testFileUrl,
    status: item.status,
    salary: item.salary,
    decision: {
      status: item.status,
      candidate: { id: item.id, name: item.consultant.name },
    },
    businessManager: item.consultant.businessManager.fullName,
    notes: '',
  }));

  return (
    <DataGrid
      rows={row}
      columns={columns}
      pageSize={ITEMS_PER_PAGE}
      rowsPerPageOptions={[ITEMS_PER_PAGE]}
      rowCount={totalCount}
      paginationMode="server"
      sortingMode="server"
      pagination
      onPageChange={(newPage) => {
        setPage(newPage);
      }}
      disableSelectionOnClick
      experimentalFeatures={{ newEditingApi: true }}
      // visibility of columns on different user roles
      columnVisibilityModel={{
        fee: !isClient,
        client: !isClient,
        businessManager: !isBusinessManager,
      }}
      components={{ Toolbar: TopBar }}
      sx={{
        height: 800,
        width: '100%',
        marginTop: '0.8rem',
        border: 0,
        fontFamily: 'Helvetica',
        fontSize: '12px',

        '.rows': {
          background: 'white',
          marginBottom: '0.5rem',
        },

        '.header': {
          background: 'white',
        },

        '.start': {
          borderRadius: '4px 0 0 4px',
        },

        '.end': {
          borderRadius: '0 4px 4px 0',
        },

        '.MuiDataGrid-virtualScrollerRenderZone': {
          height: '100%',

          '> div:first-of-type': {
            marginTop: '0.5rem',
          },
        },

        '.MuiDataGrid-columnSeparator': {
          display: 'none',
        },

        '.MuiDataGrid-footerContainer': {
          justifyContent: 'flex-start',
          border: 'none',
        },

        '.MuiTablePagination-root': {
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-start',
          paddingLeft: 0,
        },

        '.MuiToolbar-root': {
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-start',
        },

        '.MuiTablePagination-spacer': {
          display: 'none',
        },

        '.MuiDataGrid-columnHeaderTitle': {
          fontWeight: 700,
        },

        '.MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
          '&:focus, &:focus-within': {
            outline: 'none',
          },
        },
      }}
      getRowClassName={() => 'rows'}
    />
  );
};

export default Grid;
