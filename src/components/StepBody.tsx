import React from "react";
import styled from "styled-components";
import { StepProps } from "../_shared/types";

const StepBody: React.FC<StepProps> = ({ children, step }) => {
  return (
    <StyledDiv>
      <div className="step-body">{children}</div>
    </StyledDiv>
  );
};

export default StepBody;

const StyledDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;

  .step-body {
    flex: 1;
    justify-content: center;
    align-items: center;
    display: flex;
  }
`;
