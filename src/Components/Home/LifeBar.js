import React from "react";
import styled from "styled-components";
const AnimatedLifeBar = styled.div`
  height: 8px;
  width: ${({ life }) =>
    life === 3 ? "100%" : life === 2 ? "50%" : life === 1 ? "25%" : "0px"};
  border-radius: 8px;
`;
export const LifeBar = ({ life }) => {
  return (
    <div className="bg-white py-1.5 px-1 h-1 w-12 rounded-lg flex justify-center items-center">
      <AnimatedLifeBar life={life} className="bg-[#1E094A]"></AnimatedLifeBar>
    </div>
  );
};
