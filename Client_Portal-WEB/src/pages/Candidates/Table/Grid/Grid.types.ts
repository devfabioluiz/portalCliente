import {
  type CandidateOpportunity,
  type Consultant,
  type HiringStatus,
} from 'src/api/candidates';

interface IBodyRows {
  id: string;
  consultant: Consultant;
  createdAt: string;
  cvFileUrl: string | undefined;
  testFileUrl: string | undefined | null;
  status: HiringStatus;
  salary: number;
  opportunity: CandidateOpportunity;
}

interface IDecisionColumn {
  status: HiringStatus;
  candidate: {
    id: string;
    name: string;
  };
}

export type { IBodyRows, IDecisionColumn };
