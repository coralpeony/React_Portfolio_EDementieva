import Card from "react-bootstrap/Card";


function Project({project}) {
return(

<Card style={{ width: "18rem" }} >
<Card.Img  src={project.image} className="card-image" />
<div className="content">
    <Card.Body>
<Card.Title className="card-title"> {project.title} </Card.Title>
<Card.Link href={project.gitHubPages} className="btn btn-link">See the project</Card.Link>
<Card.Link href={project.gitHub} className="btn btn-link">See the code</Card.Link>
</Card.Body>
</div>
</Card>



);
}

export default Project;