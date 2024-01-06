import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';

import Footer from './Footer';

function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <Greeting name="John" message="Let's learn React together!" />
      <Footer />
    </div>
  );
}

export default App;
