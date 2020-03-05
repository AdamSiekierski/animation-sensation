import React from 'react';
import Hero from './components/Hero/Hero';
import ScrolledView from './components/ScrolledView/ScrolledView';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <ScrolledView />
      <footer className="footer">
        <h1>
          contact me at <a href="mailto:a@siekierski.ml">a@siekierski.ml</a>.
        </h1>
      </footer>
    </div>
  );
}

export default App;
