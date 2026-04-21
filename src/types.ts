export type Domain =
  | 'License Law'
  | 'Agency'
  | 'Fair Housing'
  | 'Contracts'
  | 'Financing'
  | 'Disclosure'
  | 'Property'
  | 'GA-Specific';

export type ChoiceId = 'A' | 'B' | 'C' | 'D';

export interface Choice {
  id: ChoiceId;
  text: string;
}

export interface Question {
  id: string;
  domain: Domain;
  act: number;
  stem: string;
  choices: Choice[];
  correctId: ChoiceId;
  explanation: string;
  lisaBurn?: string;
  difficulty: 1 | 2 | 3;
  source?: string;
}

export type Archetype = 'boss' | 'schemer' | 'sweetheart' | 'wildcard';

export interface MistakeRecord {
  questionId: string;
  domain: Domain;
  pickedId: ChoiceId;
  correctId: ChoiceId;
  ts: number;
}

export interface AnswerRecord {
  questionId: string;
  correct: boolean;
  pickedId: ChoiceId;
  ts: number;
}
