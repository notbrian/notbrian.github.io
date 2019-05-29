import React, { useState } from 'react';
import './App.css';
import Portfolio from './components/Portfolio';
import Nav from './components/Nav'
// portfolio.notbriann.com or notbriann.com/portfolio

function App() {
    return (
      <div>
        <div id="header">
          <h1>This is my portfolio.</h1>
          <h3>Fancy subheader text here.</h3>
        </div>
        <Nav></Nav>
        <div id="container">
          <div id="body">
            <Portfolio></Portfolio>
          </div>
        </div>
      </div>
    );
}

export default App;
