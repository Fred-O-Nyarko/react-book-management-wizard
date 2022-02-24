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
  element: (stepProps: StepProps) => JSX.Element;
}

export interface StepperProgressProps {
  stepTitles: string[];
  currentStep: number;
}

export interface Step {
  title: string;
  element: (stepProps: StepProps) => JSX.Element;
}

export interface StepProps {
  currentStep: number;
  isLast: boolean;
  isFirst: boolean;
  step: number;
}
