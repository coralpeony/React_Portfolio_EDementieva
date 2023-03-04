import React from "react";
import projectsList from "../../projects.json";
import Project from "../Project";


function Projects() {
  return (
    <div className= "container d-flex">
   

      {projectsList.map((project) => (
        <Project project={project} />
      ))}
    </div>
  );
}

export default Projects;
