export type Question = ObjectiveQuestion | SubjectiveQuestion;

interface DefaultQuestion {
  type: "objective" | "subjective";
  title: string;
  order: number;
}

export interface ObjectiveQuestion extends DefaultQuestion {
  type: "objective";
  options: ObjectiveQuestionOption[];
}
export interface ObjectiveQuestionOption {
  text: string;
}

export interface SubjectiveQuestion extends DefaultQuestion {
  type: "subjective";
}
