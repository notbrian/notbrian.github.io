import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// portfolio.notbriann.com or notbriann.com/portfolio

class App extends Component {
  render() {
    return (
      <div>
        <div id="header">
          <h1>This is my portfolio.</h1>
          <h3>Fancy subheader text here.</h3>
        </div>
        <div id="sort-icons">
          <a href="#">
            {' '}
            <img class="icon" src="/favicon.png" alt="" /> Hackathons{' '}
          </a>
          <a href="#">
            {' '}
            <img class="icon" src="/favicon.png" alt="" /> Digital Futures{' '}
          </a>
          <a href="#">
            {' '}
            <img class="icon" src="/favicon.png" alt="" /> AI/ML{' '}
          </a>
          <a href="#">
            {' '}
            <img class="icon" src="/favicon.png" alt="" /> Touch Designer{' '}
          </a>
          <a href="#">
            {' '}
            <img class="icon" src="/favicon.png" alt="" /> Installation{' '}
          </a>
          <a href="#">
            {' '}
            <img class="icon" src="/favicon.png" alt="" /> Interactive{' '}
          </a>
          <a href="#">
            {' '}
            <img class="icon" src="/favicon.png" alt="" /> Side Projects{' '}
          </a>
        </div>
        <div id="container">
          <div id="body">
            <p>Grid CMS here.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
