import "./App.css";
import Header from "./Layout/Header/Header.jsx";
import Hero from "./Pages/Hero/Hero.jsx";
import Powered from "./Pages/Powered/Powered.jsx";
import About from "./Pages/About/About.jsx";
import Benefits from "./Pages/Benefits/Benefits.jsx";
import Team from "./Pages/Team/Team.jsx";
import Roadmap from "./Pages/Roadmap/Roadmap.jsx";
import Connect from "./Pages/Connect/Connect.jsx";
import MetaBox from "./Pages/MetaBox/MetaBox.jsx";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Powered />
      <About />
      <Benefits />
      <Roadmap />
      <Team />
      <Connect />
      <MetaBox />
    </div>
  );
}

export default App;
