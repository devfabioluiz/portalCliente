import { type ConsultantProject, type Role, type Seniority } from 'src/api';

interface IBodyRows {
  id: string;
  isPinned?: boolean; // TODO: remove optional
  name: string;
  salary: number;
  cvFileUrl: string | null;
  seniority: Seniority;
  role: Role;
  project?: ConsultantProject;
}

export type { IBodyRows };
