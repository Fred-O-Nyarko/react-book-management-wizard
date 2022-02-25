import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { StepperProps } from "../_shared/types";
import { StepperProgress } from "./StepperProgress";

export const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  const stepperSelector = useRef<HTMLDivElement>(null);
  const stepsToRender = steps.filter((step) => step.render === true);

  useEffect(() => {
    moveStepper();
  }, [currentStep]);

  const moveStepper = () => {
    if (stepperSelector.current) {
      const stepper = stepperSelector.current;
      const stepWidth = stepper.offsetWidth / stepsToRender.length;
      stepper.style.transform = `translateX(-${
        stepWidth * (currentStep - 1)
      }px)`;
    }
  };

  return (
    <StyledDiv className="stepper">
      <StepperProgress
        stepTitles={stepsToRender.map((step) => step.title)}
        currentStep={currentStep}
      />
      <div className="stepper-selector" ref={stepperSelector}>
        {stepsToRender.map((step, i) => (
          <div className="step-wrapper" key={i}>
            <step.element
              step={i + 1}
              currentStep={currentStep}
              isFirst={i === 0}
              isLast={i === steps.length - 1}
            />
          </div>
        ))}
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div``;
