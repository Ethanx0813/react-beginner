import React from 'react';
import Form from './Form';


function App() {
  const handleFormSubmit = (formData) => {
    // Access formData.username and formData.email here
    console.log('Form submitted successfully:', formData);
  };

  return (
    <div>
      <h1>My App</h1>
      <Form onSubmit={handleFormSubmit} />
    </div>
  );
}

export default App;
