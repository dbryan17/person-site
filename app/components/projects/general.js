import Fold from "../folds/fold";
import { parse } from "@/app/utils/parser/parser";
import Image from "next/image";
export default function Project({ specs, includeImgs }) {
  const genFold = (foldSpec, idx, isInner) => {
    return (
      <Fold
        key={idx}
        isInner={isInner}
        title={foldSpec.title}
        foldContent={
          <>
            {parse(foldSpec.content, false)}
            {foldSpec.isFoldInFold
              ? genFold(foldSpec.innerFold, idx + "inner", false)
              : ""}
          </>
        }
      />
    );
  };
  return (
    <>
      <section className="my-card">
        <h1 className="title has-text-success is-size-5">{specs.title}</h1>
        <h2 className="subtitle is-size-6 project-subtitle">
          {specs.subtitle}
          <div className="project-btn-container">
            {specs.buttons.map((btnSpec, idx) => (
              <a
                className="button is-small project-btn"
                key={idx}
                href={btnSpec.link}
                target="_blank"
              >
                {btnSpec.display}
              </a>
            ))}
          </div>
        </h2>
        {parse(specs.content)}
        {specs.folds
          ? specs.folds.map((foldSpec, idx) => genFold(foldSpec, idx))
          : ""}
        {includeImgs && specs.imgs ? (
          <div className="project-img-cont">
            {specs.imgs.map((src) => (
              <Image
                className="project-img"
                src={src}
                key={src}
                width={200}
                height={200}
                alt="project image"
              />
            ))}
          </div>
        ) : (
          ""
        )}
      </section>
    </>
  );
}
