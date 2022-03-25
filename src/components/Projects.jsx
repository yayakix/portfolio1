import projects from "../projects";
import Card from "./Card";

function createCard(projects) {
  return (
    <Card
      key={projects.id}
      name={projects.name}
      img={projects.imgUrl}
      desc={projects.desc}
    />
  );
}

export default function Projects() {
  return (
    <div className="App">
      <h1>Projects page</h1>
      <h2>Some things i made..</h2>
      {projects.map(createCard)}
    </div>
  );
}
