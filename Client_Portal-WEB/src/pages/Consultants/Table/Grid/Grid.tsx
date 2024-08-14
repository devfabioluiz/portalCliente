import { type Dispatch, type SetStateAction } from 'react';

import {
  DataGrid,
  type GridColDef,
  type GridRenderCellParams,
} from '@mui/x-data-grid';

import { type PaginatedApiResponse } from 'src/api';
import { Attachment } from 'src/components';
import {
  StyledIconContainer,
  StyledSecondaryTag,
} from 'src/components/Grid/Grid.styles';
import Options from 'src/pages/Consultants/Table/Grid/Columns/Options';
import { type IBodyRows } from 'src/pages/Consultants/Table/Grid/Grid.types';
import PinComponent from 'src/pages/Consultants/Table/Grid/Pin/Pin';
import TopBar from 'src/pages/Consultants/TopBar/TopBar';
import { ITEMS_PER_PAGE } from 'src/pages/Opportunities/Table/Table';

interface IProps {
  paginatedQueryResult: PaginatedApiResponse<IBodyRows>;
  setPage: Dispatch<SetStateAction<number>>;
}

const Grid = (props: IProps): React.ReactElement => {
  const { paginatedQueryResult, setPage } = props;
  const { items: rows, totalCount } = paginatedQueryResult;
  const columns: GridColDef[] = [
    {
      field: 'pin',
      headerName: '',
      flex: 0.5,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (
        params: GridRenderCellParams<IBodyRows['isPinned'], IBodyRows>,
      ) => <PinComponent id={params.row.id} isPinned={params.value} />,
      headerClassName: 'header start',
      hideable: false,
    },
    {
      field: 'name',
      headerName: 'Consultant',
      flex: 1.3,
      disableColumnMenu: true,
      headerClassName: 'header',
    },
    {
      field: 'role',
      headerName: 'Role',
      flex: 1,
      disableColumnMenu: true,
      renderCell: (params: GridRenderCellParams<IBodyRows['role']>) => (
        <StyledSecondaryTag>
          <>{params?.value}</>
        </StyledSecondaryTag>
      ),
      headerClassName: 'header',
    },
    {
      field: 'seniority',
      headerName: 'Level',
      flex: 1,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params: GridRenderCellParams<IBodyRows['role']>) => (
        <>{params?.value?.name}</>
      ),
      headerClassName: 'header',
    },
    {
      field: 'client',
      headerName: 'Client',
      flex: 1.3,
      disableColumnMenu: true,
      headerClassName: 'header',
    },
    {
      field: 'project',
      headerName: 'Project',
      flex: 1.3,
      disableColumnMenu: true,
      headerClassName: 'header',
    },
    {
      field: 'accountOwner',
      headerName: 'Account owner',
      flex: 1.3,
      disableColumnMenu: true,
      headerClassName: 'header',
    },
    {
      field: 'notes',
      headerName: 'Notes',
      flex: 0.6,
      sortable: false,
      disableColumnMenu: true,
      renderCell: () => (
        <StyledIconContainer disableRipple>
          <img src={'/assets/icons/description-icon.svg'} alt="" />
        </StyledIconContainer>
      ),
      headerClassName: 'header',
    },
    {
      field: 'salary',
      headerName: 'Fee',
      flex: 1,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params: GridRenderCellParams<IBodyRows['salary']>) => (
        <>{typeof params.value === 'number' ? `${params.value}€ / Day` : '-'}</>
      ),
      headerClassName: 'header',
    },
    {
      field: 'cvFileUrl',
      headerName: 'CV',
      flex: 0.6,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params: GridRenderCellParams<IBodyRows['cvFileUrl']>) => (
        <div>
          {typeof params?.value === 'string' ? <Attachment hasPreview /> : null}
        </div>
      ),
      headerClassName: 'header',
    },
    {
      field: 'options',
      headerName: '',
      flex: 0.5,
      sortable: false,
      disableColumnMenu: true,
      renderCell: () => <Options />,
      disableReorder: true,
      headerClassName: 'header end',
      hideable: false,
    },
  ];

  const row = rows.map((item) => ({
    id: item.id,
    role: item.role.name,
    name: item.name,
    cvFileUrl: item.cvFileUrl,
    salary: item.salary,
    seniority: item.seniority,
    project: item.project?.name,
    client: item.project?.customer.name,
    accountOwner: item.project?.customer.accountOwners
      .map((item) => item.fullName)
      .join(', '),
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
