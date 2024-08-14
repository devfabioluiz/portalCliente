import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { type UserType } from 'src/api/shared/User.types';

const { persistAtom } = recoilPersist();

export const userAtomKey = 'user';

export const userAtom = atom<UserType | null>({
  key: userAtomKey,
  default: null,
  effects_UNSTABLE: [persistAtom],
});
