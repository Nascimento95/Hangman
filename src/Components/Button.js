import React from "react";
import styled from "styled-components";

const StyledButton = styled.div`
  background-color: ${({ variant }) =>
    variant === "primary" ? "#2663ff" : "#CD7FFE"};
  padding: 1px;
  border-radius: 12px;
  flex: 1;
  height: 100%;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
const InsideButton = styled.div`
  background-color: ${({ variant }) =>
    variant === "primary" ? "#2E6AFD" : "#CD7FFE"};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  height: 100%;
`;
export const Button = ({ label, variant = "primary", ...props }) => {
  return (
    <StyledButton variant={variant} {...props}>
      <InsideButton variant={variant}>
        <span className="text-white font-bold text-lg">{label}</span>
      </InsideButton>
    </StyledButton>
  );
};
