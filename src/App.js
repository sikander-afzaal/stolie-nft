import "./App.css";
import Header from "./Layout/Header/Header.jsx";
import Home from "./Pages/Home/Home.jsx";
import Connect from "./Pages/Connection/Connect/Connect.jsx";
import MetaBox from "./Pages/Connection/MetaBox/MetaBox.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/stacking" element={<Connect />}></Route>
          <Route path="/mint-page" element={<MetaBox />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
