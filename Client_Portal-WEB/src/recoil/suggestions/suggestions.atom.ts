import { atom } from 'recoil';

export enum SuggestionKeys {
  salary = 'salary',
  cvFileUrl = 'cvFileUrl',
  testFileUrl = 'testFileUrl',
  isSelected = 'isSelected',
}

interface ISuggestion {
  [SuggestionKeys.salary]: number;
  [SuggestionKeys.cvFileUrl]: string;
  [SuggestionKeys.testFileUrl]?: string;
  [SuggestionKeys.isSelected]?: boolean;
}

export type ISuggestionsAtom = Record<string, ISuggestion>;

export const suggestionsAtomKey = 'suggestions';

export const suggestionsAtom = atom<ISuggestionsAtom>({
  key: suggestionsAtomKey,
  default: {},
});
