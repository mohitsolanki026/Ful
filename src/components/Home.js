import React from "react";
import ResponsiveAppBar from "./NavBar";
import leftStyle from "../svgtopng/asset 16.png";
import rightStyle from "../svgtopng/asset 15.png";
import "./Home.css";
import { IconButton, TextField, Tooltip } from "@mui/material";
import Part2 from "./Part2";
function Home() {
  return (
    <div className="Home" style={{ position: "relative" }}>
      <div
        className="righ"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "50%",
          height: "50%",
          overflow: "hidden",
        }}
      >
        <img
          className="rightimg"
          src={rightStyle}
          alt=""
          style={{ width: "85%", marginLeft: "45%", marginTop: "-45%" }}
        />
      </div>
      <div className="navbar">
        <ResponsiveAppBar />
      </div>
      <div className="left">
        <img src={leftStyle} alt="" />
      </div>
      <div className="text1" style={{ textAlign: "center" }}>
        <p
          style={{
            border: "0px solid black",
            marginTop:"20px",
            display: "inline-block",
            padding: "20px",
            boxShadow: "0 0 8px 8px rgb(240, 226, 250)",
          }}
        >
          🎉 73821 new domains added on 22 February 2023{" "}
          <a href="" style={{ textDecoration: "none" }}>
            {" "}
            Read More
          </a>
        </p>
      </div>
      <div className="middle-feild">
      <div className="middle-text">
        <h1>What Is The Web Built On?</h1>
        <div className="p-text">
          <p>Uncover the technology stack behind any website.</p>
          <p>
            Use our tools for lead generation, market analysis and competitor
            research.
          </p>
        </div>
        <div className="search-field">
          <TextField
            className="search-text"
            id="outlined-basic"
            label="Enter URL for lookup"
            variant="outlined"
          />
          <button className="search">
            <h3>Search</h3>
          </button>
        </div>
      </div>
      <p style={{fontSize:"1.2rem"}}>We periodically scan <span style={{color:"blue"}}>212,396,680</span>  websites and provide up-to-date information.</p>
      </div>
    

    </div>
  );
}

export default Home;
