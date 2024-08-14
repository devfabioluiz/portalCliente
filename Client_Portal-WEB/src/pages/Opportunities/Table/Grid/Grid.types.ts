import {
  type Customer,
  type Project,
  type Role,
  type Seniority,
  type Technology,
} from 'src/api';

interface IBodyRows {
  id: string;
  identifier: string;
  isPinned: boolean;
  openDate: string;
  customer: Customer;
  project: Project;
  role: Role;
  level: Seniority;
  numOfRequestedPositions: number;
  description: string;
  technologies: Technology[];
  salaryMinimum: number;
  salaryMaximum: number;
  location: string;
}

export enum OpportunityColumnEnum {
  PIN = 'pin',
  IDENTIFIER = 'identifier',
  OPEN_DATE = 'openDate',
  CUSTOMER = 'customer',
  PROJECT = 'project',
  ROLE = 'role',
  SENIORITY = 'seniority',
  TECHNOLOGY = 'technology',
  FEE = 'fee',
  LOCATION = 'location',
  POSITIONS = 'positions',
  DESCRIPTION = 'description',
  SUGGEST = 'suggest',
  HISTORY = 'history',
  OPTIONS = 'options',
}

type SortingAndFilteringTableFields =
  | OpportunityColumnEnum.OPEN_DATE
  | OpportunityColumnEnum.CUSTOMER
  | OpportunityColumnEnum.ROLE
  | OpportunityColumnEnum.SENIORITY
  | OpportunityColumnEnum.TECHNOLOGY
  | OpportunityColumnEnum.FEE
  | OpportunityColumnEnum.POSITIONS;

export type { IBodyRows, SortingAndFilteringTableFields };
