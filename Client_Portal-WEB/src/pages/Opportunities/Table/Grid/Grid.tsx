import { type Dispatch, type SetStateAction } from 'react';

import {
  DataGrid,
  type GridColDef,
  type GridRenderCellParams,
} from '@mui/x-data-grid';

import { useRecoilValue, useSetRecoilState } from 'recoil';

import { type PaginatedApiResponse, type Technology } from 'src/api';
import { UserRole } from 'src/api/shared/User.types';
import Dates from 'src/components/Grid/Columns/Dates';
import Description from 'src/components/Grid/Columns/Description';
import Technologies from 'src/components/Grid/Columns/Tech';
import Options from 'src/pages/Opportunities/Table/Grid/Columns/Options';
import {
  StyledRoleTechContainer,
  StyledTag,
} from 'src/pages/Opportunities/Table/Grid/Grid.styles';
import {
  type IBodyRows,
  OpportunityColumnEnum,
  type SortingAndFilteringTableFields,
} from 'src/pages/Opportunities/Table/Grid/Grid.types';
import { History } from 'src/pages/Opportunities/Table/Grid/History';
import PinComponent from 'src/pages/Opportunities/Table/Grid/Pin/Pin';
import { Positions } from 'src/pages/Opportunities/Table/Grid/Positions';
import { Suggestions } from 'src/pages/Opportunities/Table/Grid/Suggestions';
import { ITEMS_PER_PAGE } from 'src/pages/Opportunities/Table/Table';
import TopBar from 'src/pages/Opportunities/TopBar/TopBar';
import { opportunityFiltersAtom } from 'src/recoil/opportunity';
import { userAtomRole } from 'src/recoil/user';

interface IProps {
  paginatedQueryResult: PaginatedApiResponse<IBodyRows>;
  setPage: Dispatch<SetStateAction<number>>;
}

const Grid = (props: IProps): React.ReactElement => {
  const userRole = useRecoilValue(userAtomRole);

  const shouldHide = (field: OpportunityColumnEnum): boolean => {
    switch (field) {
      case OpportunityColumnEnum.CUSTOMER:
        return userRole === UserRole.CLIENT;
      case OpportunityColumnEnum.SUGGEST:
        return userRole !== UserRole.ADMIN;
      case OpportunityColumnEnum.HISTORY:
        return userRole !== UserRole.CLIENT;
      default:
        return false;
    }
  };

  const filters = useRecoilValue(opportunityFiltersAtom);
  const setFilters = useSetRecoilState(opportunityFiltersAtom);
  const { paginatedQueryResult, setPage } = props;
  const { items: rows, totalCount } = paginatedQueryResult;
  const columns: GridColDef[] = [
    {
      field: OpportunityColumnEnum.PIN,
      hide: shouldHide(OpportunityColumnEnum.PIN),
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
      field: OpportunityColumnEnum.IDENTIFIER,
      hide: shouldHide(OpportunityColumnEnum.IDENTIFIER),
      headerName: 'ID',
      flex: 1,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params: GridRenderCellParams) => (
        <StyledTag>{params.value}</StyledTag>
      ),
      headerClassName: 'header',
      hideable: false,
    },
    {
      field: OpportunityColumnEnum.OPEN_DATE,
      hide: shouldHide(OpportunityColumnEnum.OPEN_DATE),
      sortingOrder: ['asc', 'desc'],
      headerName: 'Open date',
      flex: 1,
      disableColumnMenu: true,
      renderCell: (params: GridRenderCellParams<IBodyRows['openDate']>) => (
        <Dates openDate={params.value ?? ''} />
      ),
      headerClassName: 'header',
    },
    {
      field: OpportunityColumnEnum.CUSTOMER,
      hide: shouldHide(OpportunityColumnEnum.CUSTOMER),
      sortingOrder: ['asc', 'desc'],
      headerName: 'Client',
      flex: 1,
      disableColumnMenu: true,
      headerClassName: 'header',
    },
    {
      field: OpportunityColumnEnum.PROJECT,
      hide: shouldHide(OpportunityColumnEnum.PROJECT),
      sortingOrder: ['asc', 'desc'],
      headerName: 'Project',
      flex: 1.3,
      disableColumnMenu: true,
      headerClassName: 'header',
    },
    {
      field: OpportunityColumnEnum.ROLE,
      hide: shouldHide(OpportunityColumnEnum.ROLE),
      sortingOrder: ['asc', 'desc'],
      headerName: 'Role',
      flex: 1,
      disableColumnMenu: true,
      renderCell: (params) => (
        <StyledRoleTechContainer>{params.value}</StyledRoleTechContainer>
      ),
      headerClassName: 'header',
    },
    {
      field: OpportunityColumnEnum.SENIORITY,
      hide: shouldHide(OpportunityColumnEnum.SENIORITY),
      sortingOrder: ['asc', 'desc'],
      headerName: 'Level',
      flex: 1,
      disableColumnMenu: true,
      headerClassName: 'header',
    },
    {
      field: OpportunityColumnEnum.TECHNOLOGY,
      hide: shouldHide(OpportunityColumnEnum.TECHNOLOGY),
      sortingOrder: ['asc', 'desc'],
      headerName: 'Technologies',
      flex: 1.6,
      disableColumnMenu: true,
      renderCell: (params: GridRenderCellParams<string[]>) => (
        <Technologies techs={params.value} />
      ),
      headerClassName: 'header',
    },
    {
      field: OpportunityColumnEnum.FEE,
      hide: shouldHide(OpportunityColumnEnum.FEE),
      sortingOrder: ['asc', 'desc'],
      headerName: 'Fee',
      flex: 1.5,
      disableColumnMenu: true,
      headerClassName: 'header',
    },
    {
      field: OpportunityColumnEnum.LOCATION,
      hide: shouldHide(OpportunityColumnEnum.LOCATION),
      sortingOrder: ['asc', 'desc'],
      headerName: 'Location',
      flex: 1,
      disableColumnMenu: true,
      headerClassName: 'header',
    },
    {
      field: OpportunityColumnEnum.POSITIONS,
      hide: shouldHide(OpportunityColumnEnum.POSITIONS),
      sortingOrder: ['asc', 'desc'],
      headerName: 'Positions',
      flex: 1,
      disableColumnMenu: true,

      renderCell: (
        params: GridRenderCellParams<
          {
            requestedPositions: number;
            submittedPositions: number;
          },
          IBodyRows
        >,
      ) => (
        <Positions
          requestedPositions={params.formattedValue?.requestedPositions}
          submittedPositions={params.formattedValue?.submittedPositions}
          opportunityId={params.row.id}
        />
      ),
      headerClassName: 'header',
    },
    {
      field: OpportunityColumnEnum.DESCRIPTION,
      hide: shouldHide(OpportunityColumnEnum.DESCRIPTION),
      headerName: 'Description',
      flex: 1,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params: GridRenderCellParams<IBodyRows['description']>) => (
        <Description description={params.value} />
      ),
      headerClassName: 'header',
    },
    {
      field: OpportunityColumnEnum.SUGGEST,
      hide: shouldHide(OpportunityColumnEnum.SUGGEST),
      headerName: 'Suggest',
      flex: 1,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params: GridRenderCellParams<undefined, IBodyRows>) => (
        <Suggestions opportunityId={params.row.id} />
      ),
      headerClassName: 'header',
    },
    {
      field: OpportunityColumnEnum.HISTORY,
      hide: shouldHide(OpportunityColumnEnum.HISTORY),
      headerName: 'History',
      flex: 1,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (_params: GridRenderCellParams<undefined, IBodyRows>) => (
        // TODO: add logic for history
        <History />
      ),
      headerClassName: 'header',
    },
    {
      field: OpportunityColumnEnum.OPTIONS,
      hide: shouldHide(OpportunityColumnEnum.OPTIONS),
      headerName: '',
      flex: 0.5,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params: GridRenderCellParams<undefined, IBodyRows>) => (
        <Options opportunityId={params.row.id} />
      ),
      disableReorder: true,
      headerClassName: 'header end',
      hideable: false,
    },
  ];

  const row = rows.map((item) => ({
    id: item.id,
    pin: item.isPinned,
    identifier: item.identifier,
    openDate: item.openDate,
    client: item.customer.name,
    project: item.project.name,
    role: item.role.name,
    level: item.level.name,
    technologies: item.technologies.map((tech: Technology) => tech.name),
    fee: `${item.salaryMinimum} - ${item.salaryMaximum}€ / Day`,
    location: item.location,
    positions: {
      submittedPositions: 0, // TODO: get number of submitted positions from API
      requestedPositions: item.numOfRequestedPositions,
    },
    description: item.description,
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
      initialState={{
        sorting: {
          sortModel: [
            {
              field: OpportunityColumnEnum.OPEN_DATE,
              sort: 'asc',
            },
          ],
        },
      }}
      onSortModelChange={(newSortModel) => {
        console.log('newSortModel[0]', newSortModel[0]);
        setFilters({
          ...filters,
          sortField: newSortModel[0].field as SortingAndFilteringTableFields,
          sortDirection: newSortModel[0].sort ?? 'asc',
        });
      }}
      disableSelectionOnClick
      experimentalFeatures={{ newEditingApi: true }}
      pagination
      onPageChange={(newPage) => {
        setPage(newPage);
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
