import { projects } from "../data/projects/projects";
import Project from "../components/projects/general";
export default function Projects() {
  return (
    <div className="slim-container">
      <section className="page-chunk">
        <section className="hero">
          <div className="hero-body">
            <p className="title has-text-success is-size-2">Projects</p>
            <p className="subtitle">
              A collection of past and current projects that I find interesting
            </p>
          </div>
        </section>
      </section>
      {projects.map((project) => (
        <Project specs={project} key={project.title} />
      ))}
    </div>
  );
}
