import React from 'react';
import NavBar from './components/NavBar';
import HomeContent from './components/HomeContent';
import Trail from './components/Trail';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <HomeContent /> */}
      <Trail />
    </div>
  );
}

export default App;
