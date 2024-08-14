import { type RecoilState, atom } from 'recoil';

export interface INotification {
  id: string;
  type: 'warning' | 'success' | 'error';
  message?: string;
  autoHideDuration?: number;
}

export const notificationAtom: RecoilState<INotification[]> = atom<
  INotification[]
>({
  key: 'notificationState',
  default: [],
});
