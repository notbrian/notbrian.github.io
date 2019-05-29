import React from 'react';
import icon from '../hand.svg';

function Nav() {
    return(
        <div id="sort-icons">
        <a href="#1">
          <img className="icon" src={icon} alt="" /> Hackathons
        </a>
        <a href="#2">
          <img className="icon" src={icon} alt="" /> Digital Futures
        </a>
        <a href="#3">
          <img className="icon" src={icon} alt="" /> AI/ML
        </a>
        <a href="#4">
          <img className="icon" src={icon} alt="" /> Touch Designer
        </a>
        <a href="#5">
         <img className="icon" src={icon} alt="" /> Installation
        </a>
        <a href="#6">
          <img className="icon" src={icon} alt="" /> Interactive
        </a>
        <a href="#7">
          <img className="icon" src={icon} alt="" /> Side Projects
        </a>
      </div>
    )
}

export default Nav;