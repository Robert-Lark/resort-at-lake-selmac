import React from 'react';
import Body from './Body';
import Gallery from './Gallery';
import '../src/styles/App.css'
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Gallery />
    </div>
  );
}

export default App;
