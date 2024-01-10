import React from 'react';

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();

    
    const username = e.target.elements.username.value;
    const email = e.target.elements.email.value;

    
    console.log('Form submitted successfully');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Username" />
      <input type="email" name="email" placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
