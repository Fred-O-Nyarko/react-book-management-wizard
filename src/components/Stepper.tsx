import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { StepperProps } from "../_shared/types";
import { StepperProgress } from "./StepperProgress";

export const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  const stepperSelector = useRef<HTMLDivElement>(null);
  useEffect(() => {
    moveStepper();
  }, [currentStep]);

  const moveStepper = () => {
    if (stepperSelector.current) {
      const stepper = stepperSelector.current;
      const stepWidth = stepper.offsetWidth / steps.length;
      stepper.style.transform = `translateX(-${
        stepWidth * (currentStep - 1)
      }px)`;
    }
  };

  return (
    <StyledDiiv className="stepper">
      <StepperProgress
        stepTitles={steps.map((step) => step.title)}
        currentStep={currentStep}
      />
      <div className="stepper-selector" ref={stepperSelector}>
        {steps.map((step, i) => (
          <div className="step-wrapper">
            <step.element
              step={i + 1}
              currentStep={currentStep}
              isFirst={i === 0}
              isLast={i === steps.length - 1}
            />
          </div>
        ))}
      </div>
    </StyledDiiv>
  );
};

const StyledDiiv = styled.div``;
