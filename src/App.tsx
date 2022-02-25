import styled from "styled-components";
import { Button, StepBody, Stepper } from "./components";
import data from "./data/generes.json";
import { ReactComponent as Back } from "./_shared/assets/left-arrow.svg";
import { IGenre, Step, StepProps } from "./_shared/types";

import { useEffect, useState } from "react";
import { Genres, Subgenres } from "./steps";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { isEmpty } from "./_shared/utils";
export const App = () => {
  const books = useAppSelector(({ books }) => books.books);
  const selectedGenre = useAppSelector(({ step }) => step.genre);
  const selectedSubgenre = useAppSelector(({ step }) => step.subgenre);
  const isNewSubgenre = useAppSelector(({ step }) => step.addNewSubgenre);

  const steps: Step[] = [
    {
      title: "Genre",
      render: true,
      element: (stepProps) => (
        <StepBody {...stepProps}>
          <Genres genres={genres} />
        </StepBody>
      ),
    },
    {
      title: "Sub Genre",
      render: true,
      element: (stepProps) => (
        <StepBody {...stepProps}>
          <Subgenres />
        </StepBody>
      ),
    },
    {
      title: "Add new subgenre",
      render: isNewSubgenre,
      element: (stepProps) => (
        <StepBody {...stepProps}>Add new subgenre</StepBody>
      ),
    },

    {
      title: "Information",
      render: true,
      element: (stepProps) => <StepBody {...stepProps} />,
    },
  ];

  const genres = JSON.parse(JSON.stringify(data)).genres as IGenre[];

  // listen to updates on genre click

  const [currentStep, setCurrentStep] = useState<number>(1);

  const goNextStep = () => {
    const nextStep = currentStep + 1;

    if (nextStep <= steps.length) {
      setCurrentStep(nextStep);
    }
  };

  const goPreviousStep = () => {
    const previousStep = currentStep - 1;
    if (previousStep >= 1) {
      setCurrentStep(previousStep);
    }
  };

  return (
    <StyledPage>
      <div className="wrapper">
        <h4 className="header">Add book - New book</h4>
        <Stepper
          steps={steps}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />

        <div className="step-actions">
          <Button
            className="back step-button"
            content={
              <>
                <Back className="back-icon" /> <span>Back</span>
              </>
            }
            disabled={currentStep === 1}
            onClick={goPreviousStep}
          />
          <Button
            className="step-button"
            variant="filled"
            disabled={
              currentStep === steps.length ||
              (isEmpty(selectedGenre) && currentStep === 1) ||
              (isEmpty(selectedSubgenre) && currentStep === 2)
            }
            content={<div>Next</div>}
            onClick={goNextStep}
          />
        </div>
      </div>
    </StyledPage>
  );
};

export default App;

const StyledPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #fafafa;

  .wrapper {
    width: 600px;
    position: relative;
    overflow: hidden;
    display: inline-block;
    border-radius: 0.5rem;
    border-color: #c6c5cb;
    border-width: 1px;
    border-style: solid;
    background: #fff;
    padding: 1rem;
  }

  .step-actions {
    display: flex;
    justify-content: flex-end;
  }

  .step-button {
    width: 7rem;
  }

  .back-icon {
    height: 0.8rem;
    width: 100%;
    margin-right: 0.5rem;
    transition: all 0.2s ease-in-out;
  }
  .back-icon:hover {
    transform: translateX(-10px);
  }

  .back {
    margin-right: 1rem;
  }

  .header {
    color: #6c7181;
    font-weight: 600;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
`;
