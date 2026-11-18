import { QuizQuestion } from '../../types';

export type ConceptStatus = 'todo' | 'in-progress' | 'learned';

export interface Concept {
  id: number;
  title: string;
  status: ConceptStatus;
  quiz: QuizQuestion[];
}

export interface Technology {
  id: number;
  name: string;
  description: string;
  avatarUrl: string;
  concepts: Concept[];
}
