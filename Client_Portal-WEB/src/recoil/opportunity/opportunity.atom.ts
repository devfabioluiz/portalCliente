import { atom } from 'recoil';

import {
  OpportunityColumnEnum,
  type SortingAndFilteringTableFields,
} from 'src/pages/Opportunities/Table/Grid/Grid.types';

export interface IFilterAtom {
  projectIds: string[];
  customerIds: string[];
  roleIds: string[];
  consultantIds: string[];
  technologyIds: string[];
  minFee: number[];
  maxFee: number[];
  sortField: SortingAndFilteringTableFields;
  sortDirection: 'desc' | 'asc';
}

export type FilterKeys = keyof IFilterAtom;

const defaultFilters = {
  projectIds: [],
  customerIds: [],
  roleIds: [],
  consultantIds: [],
  technologyIds: [],
  minFee: [],
  maxFee: [],
  sortField: OpportunityColumnEnum.OPEN_DATE as const,
  // latest opportunity first
  sortDirection: 'asc' as const,
};

export const opportunityFiltersAtom = atom<IFilterAtom>({
  key: 'opportunityAtom/filters',
  default: defaultFilters,
});
