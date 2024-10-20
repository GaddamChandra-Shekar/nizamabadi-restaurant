import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} className="logo" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            possimus temporibus error rem at dicta veniam non alias id
            reiciendis, incidunt labore sapiente harum eius aspernatur quae
            recusandae est sint.
          </p>
          <div className="footer-content-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Nizamabadi Restaurant</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Help</li>
            <li>Address</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Visit Again</h2>
          <ul>
            <li>+919852586243</li>
            <li>nizamabadirestaurant@gmial.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
