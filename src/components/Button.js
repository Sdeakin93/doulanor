import * as React from "react";
import "../styles.css";
import styled from "styled-components";

const SButton = styled.div`
  button {
    background-color: ${(p) => (p.dark ? "black" : "FCD5CE")};
    border-radius: 33px;
    border: none;
    display: inline-block;
    cursor: pointer;
    color: ${(p) => (p.dark ? "white" : "black")};
    font-size: 17px;
    padding: 10px;
    text-decoration: none;
    font-family: "Merriweather", serif;
    padding: 1rem;
    :hover {
      color: white;
    }
    :active {
      position: relative;
    }
  }
`;
const Button = ({ link, text, dark }) => {
  return (
    <div>
      <a href={link} rel="noopener noreferrer">
        <SButton dark={dark}>
          <button>{text}</button>
        </SButton>
      </a>
    </div>
  );
};

export default Button;
