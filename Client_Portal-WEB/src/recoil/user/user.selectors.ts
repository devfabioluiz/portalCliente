import { selector } from 'recoil';

import { userAtom, userAtomKey } from 'src/recoil/user/user.atom';

export const userAtomRole = selector({
  key: `${userAtomKey}_role`,
  get: ({ get }) => {
    const user = get(userAtom);
    return user?.role;
  },
});
