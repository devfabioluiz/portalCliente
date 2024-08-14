import { selector, selectorFamily } from 'recoil';

import {
  suggestionsAtom,
  suggestionsAtomKey,
} from 'src/recoil/suggestions/suggestions.atom';

export const suggestionsAtomValue = selector({
  key: `${suggestionsAtomKey}Value`,
  get: ({ get }) => get(suggestionsAtom),
});

export const suggestionsAtomLength = selector({
  key: `${suggestionsAtomKey}Length`,
  get: ({ get }) => {
    const value = get(suggestionsAtom);
    return Object.keys(value).filter((id) => value[id].isSelected).length;
  },
});

export const suggestionsAtomSingleData = selectorFamily({
  key: `${suggestionsAtomKey}SingleData`,
  get:
    (id: string) =>
    ({ get }) =>
      get(suggestionsAtom)[id] || {},
});

export const suggestionsAtomIsFormValid = selector({
  key: `${suggestionsAtomKey}IsFormValid`,
  get: ({ get }) => {
    const suggestions = get(suggestionsAtom);

    return Object.keys(suggestions)
      .filter((id) => suggestions[id].isSelected)
      .every((id) => suggestions[id].cvFileUrl && suggestions[id].salary);
  },
});
