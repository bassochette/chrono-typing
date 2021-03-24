export enum StorageKeys {
  CHALLENGE_HISTORY= 'challenge_history',
  SETTINGS = 'settings',
}

export const browserOnlyGuard = (): void => {
  if (window === undefined) {
    throw new Error('method can only be used in the browser')
  }
}

export const getFromStorage = <T>(key: StorageKeys): T => {
  browserOnlyGuard();
  const data = localStorage.getItem(key);
  return JSON.parse(data) as T;
}

export const setInStorage = <T>(key: StorageKeys, value: T): void => {
  browserOnlyGuard();
  window.localStorage.setItem(key, JSON.stringify(value));
}