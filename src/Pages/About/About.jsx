import React from "react";
import "./About.css";
import robo2 from "../../Assets/robo2.png";
import quote from "../../Assets/quote.svg";
//slider library
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
//slider images
import slider1 from "../../Assets/slider/slider-img1.jpeg";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-left">
          <img src={robo2} alt="" />
        </div>
        <div className="about-right">
          <h1>What are MetaHomies?</h1>
          <p>
            MetaHomies is your ticket into a one of a kind real world/ next gen
            utility NFT stored on the Ethereum blockchain. With only 3,333 VIP
            members ever to be minted, MetaHomies grants holders access to a
            whole new world of utility. By owning just one MetaHomie NFT you
            will simultaneously reap the benefits of owning Real and Digital
            Estate, collecting passive rewards on a daily basis while you
            explore the ever expanding metaverse.
          </p>
          <p>
            MetaHomies is a collection of NFTs stored as an ERC-721 token on the
            Ethereum blockchain. Each MetaHomie is provably rare, some more rare
            than others however no two are the same.
          </p>
          <p>
            They are non-fungible, as these tokens are not interchangeable with
            one another.
          </p>
          <p>‍Each MetaHomie is 100% unique</p>
          <hr />
          <p className="quote">
            <span style={{ marginRight: "10px" }}>
              <img src={quote} alt="" />
            </span>
            “NFTs can prove ownership of real-world items, and their ability to
            authenticate extends beyond art and games. The idea of having real
            world utility attached to Real Estate is becoming more and more
            attractive.”
          </p>
          <p className="copy">
            <strong>John Pineda</strong>, Founder and Managing Partner @Exodus
            Mining LLC
          </p>
        </div>
      </div>
      <div className="about-bottom">
        <Splide
          options={{
            autoplay: "play",
            type: "loop",
            rewind: true,
            perPage: 5,
            height: "auto",
            gap: "0.5rem",
            width: "80%",
            arrows: false,
            focus: "center",
            perMove: 1,
            drag: "free",
            breakpoints: {
              947: {
                width: "90%",
              },
              699: {
                perPage: 3,
              },
              489: {
                width: "95%",
                perPage: 3,
              },
            },
          }}
        >
          <SplideSlide>
            <img className="slider-image" src={slider1} alt="Image1" />
          </SplideSlide>
          <SplideSlide>
            <img className="slider-image" src={slider1} alt="Image2" />
          </SplideSlide>
          <SplideSlide>
            <img className="slider-image" src={slider1} alt="Image2" />
          </SplideSlide>
          <SplideSlide>
            <img className="slider-image" src={slider1} alt="Image2" />
          </SplideSlide>
          <SplideSlide>
            <img className="slider-image" src={slider1} alt="Image2" />
          </SplideSlide>
          <SplideSlide>
            <img className="slider-image" src={slider1} alt="Image2" />
          </SplideSlide>
          <SplideSlide>
            <img className="slider-image" src={slider1} alt="Image2" />
          </SplideSlide>
          <SplideSlide>
            <img className="slider-image" src={slider1} alt="Image2" />
          </SplideSlide>
          <SplideSlide>
            <img className="slider-image" src={slider1} alt="Image2" />
          </SplideSlide>
          <SplideSlide>
            <img className="slider-image" src={slider1} alt="Image2" />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}

export default About;
