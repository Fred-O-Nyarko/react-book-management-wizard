import React from "react";
import styled from "styled-components";
interface IButtonProps {
  variant?: "outlined" | "filled";
  content: JSX.Element;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}
const Button = ({
  content,
  variant = "outlined",
  onClick,
  className,
  disabled,
}: IButtonProps) => {
  return (
    <StyledButton
      disabled={disabled}
      variant={variant}
      onClick={onClick}
      className={className}
    >
      {content}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<{ variant: "outlined" | "filled" }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1.5rem;
  width: auto;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease-in-out;

  background-color: ${({ variant }) =>
    variant === "filled" ? "#525a6c" : "transparent"};

  border-radius: 5px;
  border: 1px solid #525a6c;
  color: ${({ variant }) => (variant === "filled" ? "#fff" : "#525a6c")};

  &:hover {
    background-color: ${({ variant }) =>
      variant === "filled" ? "transparent" : "#525a6c"};
    color: ${({ variant }) => (variant === "filled" ? "#525a6c" : "#fff")};
  }

  &:disabled {
    background-color: #c6c5cb;
    color: #757575;
  }
`;
