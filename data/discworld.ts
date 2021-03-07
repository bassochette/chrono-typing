import { ChallengeType, Challenge, Language } from './IChallenge.d'

const TYPE = ChallengeType.BOOK;
const LANG = Language.EN;
const SOURCE = 'Terry Pratchett, Discworld';

const quotes = [
  'REALLY? AS IF IT WAS SOME KIND OF PINK PILL? NO. HUMANS NEED FANTASY TO BE HUMAN. TO BE THE PLACE WHERE THE FALLING ANGEL MEETS THE RISING APE.',
  'Real stupidity beats artificial intelligence every time.',
  'Real children do not go hoppity skip unless they are on drugs.',
  'Commander, I always used to consider that you had a definite anti-authoritarian streak in you.',
  'The disc, being flat, has no real horizon. Any adventurous sailor who got funny ideas from staring at eggs and oranges for too long and set out for the antipodes soon learned that the reason why distant ships sometimes looked as though they were disappearing over the edge of the world was that they were disappearing over the edge of the world.',
  'It\'s like chess, you know. The Queen saves the King.',
  'No enemies had ever taken Ankh-Morpork. Well technically they had, quite often; the city welcomed free-spending barbarian invaders, but somehow the puzzled raiders found, after a few days, that they didn\'t own their horses any more, and within a couple of months they were just another minority group with its own graffiti and food shops.',
  'Cake is not the issue here.',
  'When you break rules, break \'em good and hard.',
  'People don\'t want to see what can\'t possibly exist.',
]

export default ((): Challenge[] => {
  return quotes.map(q => ({
    type: TYPE,
    source: SOURCE,
    statement: q,
    language: LANG,
  }));
})()