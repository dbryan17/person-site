"use client";
import "./styles.scss";
import "./page.css";

import { useState, useEffect } from "react";
const imgLocations = ["/one.JPG", "/two.JPG", "/three.jpeg"];
import ProjectCard from "./components/projectCards/projectCard";

export default function Home() {
  const getRandImage = () => {
    return (
      "/pictures/me" +
      imgLocations[Math.floor(Math.random() * imgLocations.length)]
    );
  };
  const [currImage, setCurrImage] = useState(getRandImage());
  useEffect(() => {
    const updateImage = () => {
      setCurrImage(getRandImage());
    };
    window.addEventListener("pageShow", updateImage);
    return () => window.removeEventListener("pageShow", updateImage);
  }, []);

  return (
    <div className="slim-container pageContNonHero">
      <div className="page-chunk">
        <div>
          <div id="homeImageCont">
            <figure className="image image-float-right" id="cody-face">
              <img src={currImage}></img>
            </figure>
          </div>

          <div className="inner-page-chunk">
            <h1 className="title has-text-success is-size-4">
              Hello, I'm Dakota
            </h1>
            <div className="inner-page-chunk">
              An icoming PhD student at CU Boulder in the{" "}
              <a href="https://plv.colorado.edu/" target="_blank">
                CUPLV Group
              </a>
              .
              <div>
                <a className="outline-link" href="./about">
                  See more about me &#8594;
                </a>
              </div>
            </div>

            <div className="inner-page-chunk">
              I enjoy building fun things for the interent that I find
              entertaining. Check them out in my{" "}
              <a href="./projects">projects</a>.
            </div>
            <div>
              I built this site as a place to share my projects, a little about
              me, and somewhere myself and others can share ideas and stories.{" "}
            </div>
          </div>
        </div>
        <div className="inner-page-chunk">
          Feel free to contact me via email at{" "}
          <a href="mailto:dakota.bryan@colorado.edu">
            dakota.bryan@colorado.edu
          </a>
        </div>
        <hr className="has-background-primary" />
      </div>
      <div className="page-chunk">
        <h1 className="title has-text-success is-size-3">Featured Project</h1>
        <h2 className="subtitle">Picked at random</h2>
        <ProjectCard />
      </div>
      <div className="page-chunk">
        <h1 className="title has-text-success is-size-3">Featured Blog</h1>
        <h2 className="subtitle">Also at random</h2>
      </div>
    </div>
  );
}
