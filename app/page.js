import "./styles.scss";
import "./page.css";

import RandImage from "./components/rand/randImage";
import RandProjectCard from "./components/rand/randProject";
import Head from "next/head";
import RandBlogCard from "./components/rand/randBlog";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dakota Bryan</title>
      </Head>
      <div className="slim-container pageContNonHero">
        <div className="page-chunk">
          <div>
            <div id="homeImageCont">
              <RandImage />
            </div>

            <div className="inner-page-chunk">
              <h1 className="title has-text-success is-size-4">
                Hello, I&apos;m Dakota
              </h1>
              <div className="inner-page-chunk">
                A CS PhD student at CU Boulder in the{" "}
                <a href="https://plv.colorado.edu/" target="_blank">
                  CUPLV Group
                </a>
                .
                <div>
                  {/* <a className="outline-link" href="./about"> */}
                  <a className="outline-link" href="./">
                    See more about me &#8594;
                  </a>
                </div>
              </div>
              {/* <div className="inner-page-chunk"> */}I enjoy research and
              development related to programming languages, web tools, and
              anything I find interesting. Check out my{" "}
              <a href="./projects">projects</a>.{/* </div> */}
              {/* <div>
                I built this site as a place to share my projects, a little
                about me, and somewhere myself and others can share ideas and
                stories.{" "}
              </div> */}
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
          {/* <div className="super-slim-container cards"> */}
          <RandProjectCard />
          {/* </div> */}
        </div>
        <div className="page-chunk">
          <h1 className="title has-text-success is-size-3">Featured Blog</h1>
          <h2 className="subtitle">Also random</h2>
          <RandBlogCard />
        </div>
      </div>
    </>
  );
}
