import React from "react";
import styled from "styled-components";

const StyledButton = styled.div`
  background-color: ${({ variant }) =>
    variant === "primary" ? "#2E6AFD" : "#CD7FFE"};
  padding: 3px;
  border-radius: 18px;
  flex: 1;
  height: 100%;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
const InsideButton = styled.div`
  background-color: ${({ variant }) =>
    variant === "primary" ? "#2655DC" : "#CD7FFE"};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  height: 100%;
`;
export const Button = ({ label, variant = "primary", icon, ...props }) => {
  return (
    <StyledButton variant={variant} {...props}>
      <InsideButton variant={variant} {...props}>
        {icon && <img src={icon} alt="icon" />}
        <span className="text-white font-bold text-lg font-kavoon">
          {label}
        </span>
      </InsideButton>
    </StyledButton>
  );
};
