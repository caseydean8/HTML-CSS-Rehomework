import React from 'react';
import subPic from '../Images/Submarine.png';
import ahoyPic from '../Images/ahoy.jpg';
import hippyPic from '../Images/hippies.jpg';
import friendPic from '../Images/friendsation.jpg';
import concertPic from '../Images/concert.jpg';


function Portfolio() {
  return (
    <div className="content">
      <h1>Portfolio</h1>
      <img src={subPic}></img>
      <img src={ahoyPic}></img>
      <img src={hippyPic}></img>
      <img src={friendPic}></img>
      <img src={concertPic}></img>
    </div>
  )
}

export default Portfolio
