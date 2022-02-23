import React from "react";
import styled from "styled-components";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import mother from "../media/mother-baby-smile.jpg";
import blanket from "../media/baby-blanket.jpg";
import lavender from "../media/baby-lavender.jpg";

const SCarousel = styled.div`
  margin: 5rem;
  border-radius: 1rem;
`;
const Carousel = () => {
  return (
    <SCarousel>
      <CarouselProvider
        naturalSlideWidth={200}
        naturalSlideHeight={325}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}>
            <Image>
              <img src={mother} alt="carousel image" />
            </Image>
          </Slide>
          <Slide index={1}>
            <Image>
              <img src={blanket} alt="carousel image" />
            </Image>
          </Slide>

          <Slide index={2}>
            <Image>
              <img src={lavender} alt="carousel image" />
            </Image>
          </Slide>
        </Slider>
        <div className="buttons-carousel">
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
        </div>
      </CarouselProvider>
    </SCarousel>
  );
};

export default Carousel;
