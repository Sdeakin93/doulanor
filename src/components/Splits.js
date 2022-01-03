import * as React from "react";
import "../styles.css";
import styled from "styled-components";
const SColumnBlock = styled.div`
  width: 100%;
  text-align: center;
  color: white;
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  margin: 0 auto;
  max-width: 100%;
  background-color: ${(p) => (p.darkBackground ? "#FCD5CE" : "white")};
  color: ${(p) => (p.darkBackground ? "black" : "black")};

  @media screen and (max-width: 768px) {
    display: block;
    text-align: center;
    padding-top: 1rem;
  }
`;

const Splits = ({ children, darkBackground }) => {
  return (
    <SColumnBlock darkBackground={darkBackground}>{children}</SColumnBlock>
  );
};

export default Splits;
