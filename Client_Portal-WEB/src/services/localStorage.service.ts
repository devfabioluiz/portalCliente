export enum LocalStorageKeys {
  authToken = 'authToken',
  refreshToken = 'refreshToken',
}

export const getItem = (key: LocalStorageKeys): string => {
  const token = localStorage.getItem(key);
  return token ?? '';
};

export const saveItem = (key: LocalStorageKeys, value: string): void => {
  localStorage.setItem(key, value);
};

export const removeItem = (key: LocalStorageKeys): void => {
  localStorage.removeItem(key);
};
