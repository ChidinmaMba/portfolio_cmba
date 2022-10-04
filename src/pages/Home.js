import React, { Component } from 'react';
import "./Home.css";
  
class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="sidebar card">
          <h3>Subjects</h3>
          <hr></hr>
          <ul>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
          </ul>
        </div>
        <div className="content card">
          <h3>Title</h3>
          <hr></hr>
          
        </div>
      </div>
    );
  }
}

export default Home;