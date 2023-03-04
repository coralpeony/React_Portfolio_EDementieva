
function Project({project}) {
return(
<div className="card" style= {{ width: "18rem" }} >
<img className="card-img-top" src={project.image} />
<div className="card-body">
<h5 > {project.title}</h5>
<a href={project.gitHubPages} class="btn btn-primary">See the project</a>
<a href={project.gitHub} class="btn btn-primary">Text</a>
</div>
</div>
)
}

export default Project;