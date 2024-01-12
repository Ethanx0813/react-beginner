import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Home'; // Create this component
import About from './About'; // Create this component

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/home" exact element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Router>
  );
}

export default App;