


function Project({project}) {
return(

<div className="card" style={{ width: "25rem" }} >
<img className="image-container h-100" src={project.image} />
<div className="content">
<h5> {project.title}</h5>
<a href={project.gitHubPages} className="btn btn-info">See the project</a>
<a href={project.gitHub} className="btn btn-link">See the code</a>
</div>
</div>



)
}

export default Project;