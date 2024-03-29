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
      <a href={project.link} target="__blank" ><GitHubIcon /></a>
      <a href={project.site} target="__blank"><VisibilityIcon /></a>
    </div>
  );
}

export default ProjectDisplay;
