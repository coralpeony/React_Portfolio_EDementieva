import React from "react";
import projectsList from "../../projects.json";
import Project from "../Project";


function Projects() {
  return (
    <div className= "d-md-flex redfall">
   

      {projectsList.map((project) => (
        <Project project={project} />
      ))}
    </div>
  );
}

export default Projects;
