import React from "react";
import styled from "styled-components";
interface IButtonProps {
  variant?: "outlined" | "filled";
  content: JSX.Element;
  onClick: () => void;
  className?: string;
}
const Button = ({
  content,
  variant = "outlined",
  onClick,
  className,
}: IButtonProps) => {
  return (
    <StyledDiv variant={variant} onClick={onClick} className={className}>
      {content}
    </StyledDiv>
  );
};

export default Button;

const StyledDiv = styled.div<{ variant: "outlined" | "filled" }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1.5rem;
  width: 4rem;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease-in-out;

  background-color: ${({ variant }) =>
    variant === "filled" ? "#707070" : "transparent"};

  border-radius: 5px;
  border: 1px solid
    ${({ variant }) => (variant === "filled" ? "transparent" : "#707070")};

  &:hover {
    background-color: ${({ variant }) =>
      variant === "filled" ? "transparent" : "#707070"};
    color: ${({ variant }) => (variant === "filled" ? "#707070" : "#fff")};
  }
`;
