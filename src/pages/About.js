import React, { Component } from 'react';
import "./About.css";
import IMG_2254 from '../assets/IMG_2254.jpeg';
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div className="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src={IMG_2254}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Chidinma Mba</div>
            <div className="brief_description">
              My favorite color is green. 
              <br />
              My favorite movie is The Sound of Music.
            </div>
          </div>
        </div>
      </div>
    )
  }
}