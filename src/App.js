// App.js
import React from 'react';
import Form from './Form';
import StyledComponent from './StyledComponent'; // Import the styled component
import './styles.css';

function App() {
  const handleFormSubmit = (formData) => {
    console.log('Form submitted successfully:', formData);
  };

  return (
    <div>
      <h1>My App</h1>
      <Form onSubmit={handleFormSubmit} />
      <StyledComponent>Styled with CSS-in-JS</StyledComponent>
    </div>
  );
}

export default App;
