import * as React from "react";
import "../styles.css";
import styled from "styled-components";
const SList = styled.div`
  width: 400%;
  color: black;
  padding-bottom: 1rem;
  text-align: left;
  margin: 0 auto;
  max-width: 100%;
  @media screen and (max-width: 768px) {
    display: grid;
    text-align: left;
  }
`;

const List = ({ title, point1, point2, point3, point4, point5, point6 }) => {
  return (
    <SList>
      {!!title ? <ul>{title}</ul> : null}
      {!!point1 ? <ul>{point1}</ul> : null}
      {!!point2 ? <ul>{point2}</ul> : null}
      {!!point3 ? <ul>{point3}</ul> : null}
      {!!point4 ? <ul>{point4}</ul> : null}
      {!!point5 ? <ul>{point5}</ul> : null}
      {!!point6 ? <ul>{point6}</ul> : null}
    </SList>
  );
};

export default List;
