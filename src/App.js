import "./App.css";
import Header from "./Layout/Header/Header.jsx";
import Connection from "./Pages/Connection/Connection.jsx";
import Home from "./Pages/Home/Home.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/mint-page" element={<Connection />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
