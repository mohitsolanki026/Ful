import React from "react";
import logo from "../svgtopng/ful3.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div>

   
    <footer className="footer">
      <div className="leftt">
        <img src={logo} className="logo" alt="Company Logo" />
        <h4 style={{ padding: "10px" }}>© 2023 Ful, Inc.</h4>
        <h5>All rights reserved</h5>
      </div>
      <div className="right">
        <div className="column">
          <h4>Features</h4>
          <ul>
            <li>
              <a href="#">check Domain</a>
            </li>
            <li>
              <a href="#">Email verification</a>
            </li>
            <li>
              <a href="#">Zone Files Downloads</a>
            </li>
            <li>
              <a href="#">Category Search</a>
            </li>
            <li>
              <a href="#">Technology Search</a>
            </li>
          </ul>
        </div>
        <div className="column">
          <h4>Top Technology Reports</h4>
          <ul>
            <li>
              <a href="#">Website using Nginx</a>
            </li>
            <li>
              <a href="#">Website using JQuery</a>
            </li>
            <li>
              <a href="#">Website using MySQL</a>
            </li>
            <li> <a href="#">Website using Shopify</a></li>
            <li> <a href="#">Website using WooCommerce</a></li>
          </ul>
        </div>
        <div className="column">
          <h4>More to know</h4>
          <ul>
            <li>
              <a href="#">Feature Comparisons</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Terms of use</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
        </div>
        <div className="column">
          <h4>Contact</h4>
          <ul>
            <li>
            <a href = "mailto: abc@example.com">support@fui.io</a>
            </li>
            <li>
              <a href="#">+1 343 303 6668</a>
            </li>
            <li>
              <a href="#">Ful, inc.</a>
              <br />
              <span>1207 Delawre</span>
              <span>#348 wilmington</span>
              <span>19806</span>
            </li>
          </ul>
        </div>
      </div>
      
    </footer>
    <h4 style={{textAlign:"center",backgroundColor:"#334155",color:"white",padding:"15px",fontSize:"20px"}}>Made with 💖 in Bangalore</h4>
    </div>
  );
};

export default Footer;
