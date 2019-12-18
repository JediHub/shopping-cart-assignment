import React from "react";
//import Header from "../header";
import Header from '../header/header'
import Footer from "../footer";
import "./../../styles/common.scss";
import './../../styles/home.scss';

import {
  CarouselProvider,
  Slider,
  Slide,
  Dot,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import { Link } from 'react-router-dom';
import "pure-react-carousel/dist/react-carousel.es.css";

function Home(props) {
  const { banners, categories } = props;
  return (
    
    <div className="container">
      <Header />
      <main className="main">
        
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={30}
            totalSlides={banners && banners.length}
            isPlaying={true}
          >
              <div className="slideshow-container">
                <Slider aria-label="banner deals">
                  {banners && banners.map((item,i) => {
                    return (
                      <Slide key={item.id} index={i} className="mySlides"><img src={item.bannerImageUrl} alt={item.bannerImageAlt}/></Slide>
                    )})}
                </Slider>

                <div className="slides-dot">
                  {banners && banners.map((item,i)=> {
                    return(
                      <Dot key={item.id} slide={i} aria-label={"Show slide " + item.order + " of 5"} className="dot" />
                  )})}
                </div>
                <ButtonBack aria-label="previous" className="prev">Back</ButtonBack>
                <ButtonNext aria-label="next" className="next">Next</ButtonNext>
              </div>
            
          </CarouselProvider>
       

        {categories && categories.map((item, i) => {
          return(
            i%2 === 0 ? 
            <figure key={item.id} className="flexContainer flexEnd home-tile">
            <span className="flexItem left-image">
            <img src={item.imageUrl} alt={item.key} />
            </span>
            <span className="flexItem category-info">
              <h1>{item.name}</h1>
              <figcaption>{item.description}</figcaption>
              <Link to={`/plp/${item.key}`} className="btn-title" title={item.name}>Explore {item.key}</Link>
            </span>
            </figure>
         
          : 
            <figure  key={item.id} className="flexContainer flexEnd home-tile">
            <span className="flexItem category-info">
              <h2>{item.name}</h2>
              <figcaption>{item.description}</figcaption>
              <Link to={`/plp/${item.key}`}className="btn-title" title={item.name}>Explore {item.key}</Link>
            </span>

            <span className="flexItem left-image">
                <img src={item.imageUrl} alt={item.key} />
            </span>
            </figure>
        )}) }
      </main>
      <Footer />
    </div>
  );
}

export default Home;
