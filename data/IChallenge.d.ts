export enum ChallengeType {
  BOOK = 'book',
  CODE = 'code',
  TV = 'tv',
}

export enum Language {
  FR = 'fr',
  EN = 'en'
}

export interface Challenge {
  statement: string;
  type: ChallengeType;
  language: Language;
  source: string;
}