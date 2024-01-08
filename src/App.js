import React from 'react';
import ReactDOM from 'react-dom/client';

import EventHandler from './EventHandler';

function App() {
  return (
    <div>
      <h1>Your App Component</h1>
      <p>This is some content in your app.</p>
      {/* Render the EventHandler component */}
      <EventHandler />
    </div>
  );
}

export default App;
