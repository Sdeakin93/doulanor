import * as React from "react";
import "../styles.css";
import styled from "styled-components";
import vineDivider from "../media/vine-divider.png";

const SDivider = styled.div`
  text-align: center;
  img {
    width: 20%;
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (max-width: 768px) {
    img {
      width: 50%;
      max-height: 20%;
      object-fit: cover;
    }
  }
`;

const Divider = () => {
  return (
    <SDivider>
      <img src={vineDivider} alt="vine divider" />
    </SDivider>
  );
};

export default Divider;
