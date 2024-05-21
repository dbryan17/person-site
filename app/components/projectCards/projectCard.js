import Image from "next/image";
export default function ProjectCard({ specs }) {
  return (
    <div className="cards">
      <div className="my-card">
        <h1 className="title has-text-success is-size-5">{specs.title}</h1>
        <div className="subtitle">
          <h2>{specs.subtitle}</h2>
        </div>
        <div>{specs.description}</div>
        <figure className="image is-128by128">
          <Image src={specs.imageSrc} width={200} height={200}></Image>
        </figure>
      </div>
    </div>
  );
}
