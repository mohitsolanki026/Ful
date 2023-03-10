import React from "react";
import ImageComponent from "./card/Card.js";
import image1 from "../svgtopng/Technology_Reports.png";
import image2 from "../image2.png";
import image3 from "../svgtopng/image3.png";
import image4 from "../svgtopng/image4.png";
import image5 from "../svgtopng/image5.png";
import "./Part2.css";

function Part2() {
  return (
    <div className="part2-container">
      <div className="heading">
        <h2>Power Your Sales And Marketing Teams</h2>
      </div>
      <div className="comp">
        <ImageComponent
          title="Technology Reports"
          description="Download lists of websites using a specific technology. We track over 3,000 technologies across 280+ million websites."
          imageUrl={image1}
        />
        <ImageComponent
          title="Rich Data"
          description="Download lists of websites using a specific technology. We track over 3,000 technologies across 280+ million websites."
          imageUrl={image2}
        />
        <ImageComponent
          title="Email Verification"
          description="Download lists of websites using a specific technology. We track over 3,000 technologies across 280+ million websites."
          imageUrl={image3}
        />
        <ImageComponent
          title="Zone Files"
          description="Download lists of websites using a specific technology. We track over 3,000 technologies across 280+ million websites."
          imageUrl={image4}
        />
        <ImageComponent
          title="Deep Search"
          description="Download lists of websites using a specific technology. We track over 3,000 technologies across 280+ million websites."
          imageUrl={image5}
        />
      </div>
      <div className="buttons">
        <button className="button">Try for free</button>
        <button className="button" style={{border:"2px solid #4338ca",color:"#4338ca" ,backgroundColor:"inherit"}}>How we are better</button>
      </div>
    </div>
  );
}

export default Part2;
