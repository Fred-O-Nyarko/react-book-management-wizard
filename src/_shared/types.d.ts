export interface IGenre {
  id: number;
  name: string;
  subgenres: ISubgenre[];
}

export interface ISubgenre {
  id: number;
  name: string;
  isDescriptionRequired: boolean;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

export interface Step {
  title: string;
  render?: boolean;
  element: (stepProps: StepProps) => JSX.Element;
}

export interface StepperProgressProps {
  stepTitles: string[];
  currentStep: number;
}

export interface StepProps {
  currentStep: number;
  isLast: boolean;
  isFirst: boolean;
  step: number;
}

export interface Book {
  id: string;
  title: string;
  author?: string;
  isbn?: string;
  publisher?: string;
  datePublished?: string;
  pages?: number;
  format?: string;
  edition?: string;
  editionLanguage?: string;
  description?: string;
}
export interface Books {
  books: Book[];
}
