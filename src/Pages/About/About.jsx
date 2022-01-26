import React from "react";
import "./About.css";
import robo2 from "../../Assets/robo2.png";
import quote from "../../Assets/quote.svg";
//slider library
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
//slider images
import slider1 from "../../Assets/slider/robo3.jpeg";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-left">
          <img src={robo2} alt="" />
        </div>
        <div className="about-right">
          <h1>COLLECT, TRADE, AND STAKE YOUR METAHOMIES TO EARN</h1>
          <p>
            There are 3333 NFT's in the MetaHomie collection. Each MetaHomie is
            provably rare and 100% unique.
          </p>
          <p>
            Becoming an MetaHomies holder will give you access to claim DAILY
            PASSIVE REWARDS and become a digital landlord in an existing Real
            Estate portfolio. As well as future access to roam the ever
            expanding Metaverse.
          </p>
          <p>
            Passive Rewards revolve around THE “D.R.I.P.” (Decentralized Real
            Estate Investment Portfolio) This is a portfolio of all Real Estate
            owned and managed by MetaHomies LLC and its partners. This consists
            of over $6.1 million dollars in total assets pre-mint! Which
            generate a residual income from rental profits.
          </p>
          <p>
            Holders will be rewarded in $DRIPCOIN, the internal community token
            for MetaHomies NFT. DRIPCOIN can be claimed daily and even exchanged
            for ETH. However the community token will prove to be much more
            valuable within the MetaHomie Universe.
          </p>
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
