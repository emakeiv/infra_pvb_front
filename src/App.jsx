import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Dash from "./pages/dash";
import Data from "./pages/data";
import Porfolio from "./pages/porfolio";
import Strategy from "./pages/strategy";
import Profile from "./pages/profile";
import Login from "./pages/login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dash />} />
        <Route path="/data" element={<Data />} />
        <Route path="/portfolio" element={<Porfolio />} />
        <Route path="/strategy" element={<Strategy />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
