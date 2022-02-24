import styled from "styled-components";
import { Button, StepBody, Stepper } from "./components";
import data from "./data/generes.json";
import { ReactComponent as Back } from "./_shared/assets/left-arrow.svg";
import { IGenre, Step, StepProps } from "./_shared/types";

import { useState } from "react";
import { Genres } from "./steps";
export const App = () => {
  const genres = JSON.parse(JSON.stringify(data)).genres as IGenre[];

  const steps: Step[] = [
    {
      title: "Genre",
      // Render whatever you want here, we will improve this later
      element: (stepProps) => (
        <StepBody {...stepProps}>
          <Genres genres={genres} />
        </StepBody>
      ),
    },
    {
      title: "Sub Genre",
      element: (stepProps) => <StepBody {...stepProps} />,
    },
    {
      title: "Add new subgenre",
      element: (stepProps) => <StepBody {...stepProps} />,
    },
    {
      title: "Information",
      element: (stepProps) => <StepBody {...stepProps} />,
    },
  ];

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
            disabled={currentStep === steps.length}
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
  /*
  .genres-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 3rem;
  }

  .genre-button {
    margin-bottom: 1rem;
  }

  .button-content {
    font-size: 1.2rem;
  } */
`;

// const Step: React.FC<StepProps> = ({
//   next,
//   previous,
//   isFirst,
//   isLast,
//   current,
//   step,
// }) => {
//   return (
//     <>
//       <div className="genres-list">
//         {Array(8)
//           .fill(0)
//           .map((_, index) => (
//             <Button
//               className="genre-button"
//               onClick={() => {}}
//               content={
//                 <div className="button-content">{`Genre ${index + 1}`}</div>
//               }
//             />
//           ))}
//       </div>

//       <div className="navigation">
//         <Button
//           className="back"
//           content={
//             <>
//               <Back className="back-icon" /> <span>Back</span>
//             </>
//           }
//           onClick={() => {}}
//         />
//         <Button content={<div>Next</div>} onClick={() => {}} />
//       </div>
//     </>
//   );
// };
