import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="http://" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
        <a href="https://twitter.com/DaryllFortunado" target="_blank" rel="noopener noreferrer"><TwitterIcon /></a>
        <a href="https://www.facebook.com/daryllanthony.fortunado/" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
        <a href="https://www.linkedin.com/in/daryllanthonyfortunado/" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
      </div>
      <p> &copy; 2022 daryllfortunado</p>
    </div>
  );
}

export default Footer;
