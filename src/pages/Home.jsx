import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Daryll</h2>
        <div className="prompt">
          <p>Aspiring Web developer with a passion for learning and creating.</p>
          <a href="https://www.linkedin.com/in/daryllanthonyfortunado/" target="__blank" ><LinkedInIcon /></a>
          <a href ="mailto: daryllfortunado@gmail.com"><EmailIcon /></a>
          <a href="https://github.com/42nado" target="__blank"><GithubIcon /></a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              HTML, CSS, BootStrap, ReactJS
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS,MySQL, MongoDB
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>C, C++, JavaScript, PHP, Visual Basic</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
