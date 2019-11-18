import React from "react";
import Header from "../header";
import Footer from "../footer";
import "./../../styles/common.scss";
import {
  CarouselProvider,
  Slider,
  Slide,
  Dot,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function Home(props) {
  return (
    <div className="container">
      <Header />
      <section>
        <div>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={30}
            totalSlides={3}
            isPlaying={true}
          >
            <div class="slide-container">
              <div class="slideshow-container">
                <Slider>
                  <Slide index={0}>I am the first Slide.</Slide>
                  <Slide index={1}>I am the second Slide.</Slide>
                  <Slide index={2}>I am the third Slide.</Slide>
                </Slider>

                <div className="slides-dot">
                  <Dot slide={0} className="dot" />
                  <Dot slide={1} className="dot" />
                  <Dot slide={2} className="dot" />
                </div>
                <ButtonBack className="prev">Back</ButtonBack>
                <ButtonNext className="next">Next</ButtonNext>
              </div>
            </div>
          </CarouselProvider>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
