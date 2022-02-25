import React from "react";
import styled from "styled-components";
import "./Stepper.css";

interface StepperProgressProps {
  stepTitles: string[];
  currentStep: number;
}
export const StepperProgress: React.FC<StepperProgressProps> = ({
  stepTitles,
  currentStep,
}) => {
  const progressPerStep = 100 / (stepTitles.length - 1);
  const progress = (currentStep - 1) * progressPerStep;
  return (
    <StyledDiv>
      <div className="stepper-progress-wrapper">
        <div
          className="stepper-progress-bar"
          style={{ width: progress + "%" }}
        />
        {stepTitles.map((title, i) => {
          const isActive = i + 1 === currentStep;

          return (
            <div className="step-title" key={i}>
              <div
                className={`step-title-number ${isActive ? "active-step" : ""}`}
              >
                {i + 1}
              </div>
              <span
                className={`step-description ${
                  isActive ? "active-description" : ""
                }`}
              >
                {title}
              </span>
            </div>
          );
        })}
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  position: absolute;
  top: 20px;
  width: 100%;
  z-index: 9;

  .step-title-number {
    font-size: 1.2rem;
    background: #e6ecf2;
    height: 2rem;
    width: 2rem;
    margin: 0.3rem auto;
    line-height: 1.5;
    border: 3px solid #fff;
    color: #abb7c5;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    font-weight: 500;
  }

  .active-step {
    background: #525a66;
    font-weight: 700;
    color: #fff;
  }

  .active-description {
    font-weight: 700;
    color: #525a6c !important;
  }

  .stepper-progress-wrapper {
    width: 90%;
    position: relative;
    display: flex;
    margin: auto;
    justify-content: space-between;
  }

  .step-title {
    text-align: center;
    font-size: 1rem;
    align-items: center;
    background: #fff;
    padding: 0 1rem;
    height: 30px;
  }

  .step-description {
    font-size: 0.8rem;
    color: #abb7c5;
  }

  .stepper-progress-bar {
    position: absolute;
    width: 100%;
    height: 3px;
    top: 20px;
    z-index: -1;
    background: #d1d0d5;
    transition: width 1s cubic-bezier(0.23, 1, 0.32, 1) 0s;
  }
`;
