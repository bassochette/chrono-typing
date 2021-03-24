import { Challenge } from '../data/IChallenge'
import { getFromStorage, setInStorage, StorageKeys } from './storage'

export interface ChallengeResult {
  accuracy: number;
  characterPerSecond: number;
  challenge: Challenge;
  time: Date;
}

export interface ResultHistory {
  challenges: ChallengeResult[];
}

export const addResult = (result: ChallengeResult): void => {
  const history = getResultHistory();
  history.challenges.push(result);
  setInStorage(StorageKeys.CHALLENGE_HISTORY, history);
}

export const getResultHistory = (): ResultHistory => {
  return getFromStorage<ResultHistory>(StorageKeys.CHALLENGE_HISTORY) ?? { challenges: [] };
}