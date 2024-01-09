import React from 'react';
import ReactDOM from 'react-dom/client';

import EventHandler from './EventHandler';

function App() {
  const items = ['Apple', 'Banana', 'Orange', 'Mango'];

  return (
    <ul>
  {items.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>
   
  );
}

export default App;
