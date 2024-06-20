import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import './App.css';

const App = () => (
  <div>
    <Home />
    <main>
      <About />
      <Services />
      <Contact />
    </main>
    <footer>
      <p>&copy; 2024 EquianoLab. All rights reserved.</p>
    </footer>
  </div>
);

export default App;
