import styled from "styled-components";

interface IStepperProps {
  title: string;
  description: string;
  step: number;
}

const Stepper: React.FC<IStepperProps> = ({}: IStepperProps) => {
  return (
    <StyledStepper>
      <div className="step">
        <div className="value">1</div>
      </div>
      <div className="description">Genre</div>
    </StyledStepper>
  );
};

export default Stepper;
const StyledStepper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .step {
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    background-color: #e6e6e6;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .description {
    color: #a5a5a5;
    font-size: 1rem;
    font-weight: 700;
    margin-top: 0.5rem;
  }
`;
