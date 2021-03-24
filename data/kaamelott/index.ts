import { quotes } from './quotes';
import { Challenge, ChallengeType, Language } from '../IChallenge.d'

const TYPE = ChallengeType.TV;
const LANG = Language.FR;
const SOURCE = 'Kaamelott';

export default ((): Challenge[] => {
  return quotes.map(q => ({
    type: TYPE,
    source: SOURCE,
    statement: q,
    language: LANG,
  }));
})()