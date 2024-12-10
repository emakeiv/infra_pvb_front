import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Dash from './pages/dash';
import Data from './pages/data';
import Porfolio from './pages/porfolio';
import Strategy from './pages/strategy';

function App() {
      return (
            <Router>
                  <Routes>
                        <Route path="/" element={<Dash />} /> 
                        <Route path="/data" element={<Data />} />
                        <Route path="/portfolio" element={<Porfolio />} />
                        <Route path="/strategy" element={<Strategy />} />
                  
                  </Routes>
          </Router>  
      );
}

export default App;
