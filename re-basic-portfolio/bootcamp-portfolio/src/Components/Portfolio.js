import React from "react";
import subPic from "../Images/Submarine.png";
import ahoyPic from "../Images/ahoy.jpg";
import hippyPic from "../Images/hippies.jpg";
import friendPic from "../Images/friendsation.jpg";
import concertPic from "../Images/concert.jpg";

function Portfolio() {
  return (
    <div className="content" id="portfolio">
      <h1>Portfolio</h1>
      <div className="image">
        <img src={subPic}></img>
        <div className="caption">
          Submarine
        </div>
      </div>
      <div className="image">
        <img src={ahoyPic}></img>
        <div className="caption">
          Ahoy
        </div>
      </div>
      <div className="image">
        <img src={hippyPic}></img>
        <div className="caption">
          Crystal Vibes
        </div>
      </div>

      <div className="image">
        <img src={friendPic}></img>
        <div className="caption">
         Friendsational
        </div>
      </div>
      <div className="image">
        <img src={concertPic}></img>
        <div className="caption">
          Mudio
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
