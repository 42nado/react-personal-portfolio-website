import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import VisibilityIcon from '@material-ui/icons/Visibility';
import "../styles/ProjectDisplay.css";

const ProjectDisplay = () => {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <div className="link">
        {project.link !== "" && <a href={project.link} target="__blank" ><GitHubIcon /></a>}
        {project.site !== "" && <a className="visit" href={project.site} target="__blank">Visit</a>}
      </div>

    </div>
  );
}

export default ProjectDisplay;
