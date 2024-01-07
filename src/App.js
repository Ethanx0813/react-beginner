import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';

import Footer from './Footer';
import React, { useState, useEffect } from 'react';


function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 100000);

    // Clean up the timer when the component is unmounted
    return () => clearInterval(timer);
  }, []); 
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}


export default App;
