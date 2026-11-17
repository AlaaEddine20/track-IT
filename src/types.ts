export type ConceptStatus = 'todo' | 'in-progress' | 'learned';

export type QuizQuestion = {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
};

export type Concept = {
  id: number;
  title: string;
  status: ConceptStatus;
  quiz: QuizQuestion[];
};

export type Technology = {
  id: number;
  name: string;
  description: string;
  avatarUrl: string;
  concepts: Concept[];
};
