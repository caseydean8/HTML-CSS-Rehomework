import React from "react";
import subPic from "../Images/Submarine.png";
import ahoyPic from "../Images/ahoy.jpg";
import hippyPic from "../Images/hippies.jpg";
import friendPic from "../Images/friendsation.jpg";
import concertPic from "../Images/concert.jpg";

function Portfolio() {
  return (
    <div className="content">
      <div className="portfolio">
        <h1 style={{marginRight: "10px", marginLeft: "10px"}}>Portfolio</h1>
        <div className="image">
          <img src={subPic} alt="submarine"></img>
          <div className="caption">Submarine</div>
        </div>
        <div className="image">
          <img src={ahoyPic} alt=""></img>
          <div className="caption">Ahoy</div>
        </div>
        <div className="image">
          <img src={hippyPic} alt=""></img>
          <div className="caption">Crystal Vibes</div>
        </div>

        <div className="image">
          <img src={friendPic} alt=""></img>
          <div className="caption">Friendsational</div>
        </div>
        <div className="image">
          <img src={concertPic} alt=""></img>
          <div className="caption">Mudio</div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
