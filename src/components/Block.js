import * as React from "react";
import "../styles.css";
import styled from "styled-components";
import Button from "./Button";
import List from "./List";

const SImageBlock = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 100%;
  padding-bottom:: ${(p) => (p.noPadding ? "3.3vmax" : "0")};
  flex-direction: ${(p) => (p.imageRight ? "row-reverse" : "row")};
  background-color: ${(p) => (p.darkBackground ? "#FCD5CE" : "white")};
  color: ${(p) => (p.darkBackground ? "black" : "black")};
  img {
    max-width: 45%;
    margin: 2rem;
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
    display: grid;
    text-align: center;
    padding-top: 1rem;
    img {
      margin: 0 auto;
      max-width: 80%;
    }
  }
`;

const SImageText = styled.div`
  margin: 0 auto;
  text-align: left;
  padding-top: 2rem;
  padding: 2rem;
  text-align: ${(p) => (p.centreText ? "center" : "left")};
  i {
    font-size: 0.75rem;
  }
  h3 {
    font-style: italic;
  }
  @media screen and (max-width: 768px) {
    padding: 1rem;
    margin: 0 auto;
    text-align: center;
  }
`;

const SPrice = styled.div`
  font-size: 1.25rem;
  bottom: 0;
  a {
    color: black;
  }
`;

const SQuote = styled.div`
  font-size: 0.75rem;
  font-style: italic;
  background-color: white;
  border-radius: 0.5rem;
  padding: 1rem;
  opacity: 0.8;
  display: block;
  color: black;
  a {
    color: black;
  }
`;

const Block = ({
  image,
  title,
  text,
  alt,
  buttonText,
  buttonLink,
  imageRight,
  subtitle,
  darkBackground,
  centreText,
  pretitle,
  price,
  listTitle,
  point1,
  point2,
  point3,
  point4,
  point5,
  point6,
  quote,
  dark,
  author,
  source,
  priceLink,
  noPadding,
  subtext,
}) => {
  return (
    <SImageBlock
      imageRight={imageRight}
      darkBackground={darkBackground}
      noPadding={noPadding}
    >
      {!!image ? <img src={image} alt={alt} /> : null}
      <SImageText centreText={centreText}>
        {!!pretitle ? <i>{pretitle}</i> : null}
        {!!title ? <h1>{title}</h1> : null}
        {!!subtitle ? <h3>{subtitle}</h3> : null}
        {!!text ? <p>{text}</p> : null}
        {!!subtext ? <p>{subtext}</p> : null}
        <br />

        {!!listTitle ? (
          <List
            title={listTitle}
            point1={point1}
            point2={point2}
            point3={point3}
            point4={point4}
            point5={point5}
            point6={point6}
          ></List>
        ) : null}

        {!!price ? (
          <SPrice>
            <a href={priceLink} rel="noopener noreferrer">
              {price}
            </a>
          </SPrice>
        ) : null}

        {!!quote ? (
          <SQuote>
            {quote}
            <br />
            <br />
            Source:{" "}
            <a href={source} rel="noopener noreferrer">
              {author}
            </a>
          </SQuote>
        ) : null}
        {!!buttonText ? (
          <Button dark={dark} text={buttonText} link={buttonLink}></Button>
        ) : null}
      </SImageText>
    </SImageBlock>
  );
};

export default Block;
