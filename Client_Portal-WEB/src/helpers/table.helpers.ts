import { type GridSortDirection } from '@mui/x-data-grid';

import { type ApiSortingParams, type MappedFilters, MinMaxFee } from 'src/api';
import { OpportunityColumnEnum } from 'src/pages/Opportunities/Table/Grid/Grid.types';
import { type IFilterAtom } from 'src/recoil/opportunity';

type ConvertedSortDirection = 'ASC' | 'DESC';

/**
 * Ascending sort by fee is mapped to minFee, descending to maxFee
 * @param {GridSortDirection} sort
 * @return MinMaxFee
 */
const mapSortingByFee = (sort: GridSortDirection): MinMaxFee => {
  return sort === 'asc' ? MinMaxFee.MIN_FEE : MinMaxFee.MAX_FEE;
};

/**
 * Maps filters to query params
 * @param {IFilterAtom} filters
 * @return MappedFilters
 */
const mapFiltersToQueryParams = (filters: IFilterAtom): MappedFilters => {
  const mappedFilters: MappedFilters = {
    ...filters,
    sortDirection: 'ASC' as ConvertedSortDirection,
    sortField:
      filters.sortField === OpportunityColumnEnum.FEE
        ? mapSortingByFee(filters.sortDirection)
        : (filters.sortField as ApiSortingParams),
  };

  mappedFilters.sortDirection =
    filters.sortDirection === 'asc' ? 'ASC' : 'DESC';

  switch (filters.sortField) {
    case OpportunityColumnEnum.FEE: {
      // Ascending sort by fee is mapped to minFee, descending to maxFee
      mappedFilters.sortField = mapSortingByFee(filters.sortDirection);
      break;
    }
    case OpportunityColumnEnum.OPEN_DATE: {
      // Ascending sorting means latest opportunity first
      mappedFilters.sortDirection =
        filters.sortDirection === 'asc' ? 'DESC' : 'ASC';
      break;
    }
    default:
      break;
  }
  return mappedFilters;
};

export { mapFiltersToQueryParams, type ConvertedSortDirection };
