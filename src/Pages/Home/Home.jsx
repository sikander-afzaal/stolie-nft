import React from "react";
import Hero from "./Hero/Hero.jsx";
import Powered from "./Powered/Powered.jsx";
import About from "./About/About.jsx";
import Benefits from "./Benefits/Benefits.jsx";
import Team from "./Team/Team.jsx";
import Roadmap from "./Roadmap/Roadmap.jsx";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <Hero />
      <Powered />
      <About />
      <Benefits />
      <Roadmap />
      <Team />
    </div>
  );
}

export default Home;
