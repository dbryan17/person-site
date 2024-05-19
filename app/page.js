import Image from "next/image";
import "./styles.scss";
import "./page.css";

export default function Home() {
  return (
    <div id="homePageCont" className="container">
      <div id="homePageTextCont">
        <div>
          Hello, I'm Dakota Bryan, an icoming PhD student at CU Boulder in the{" "}
          <a href="https://plv.colorado.edu/" target="_blank">
            CUPLV Group
          </a>
          .<div>See more about me</div>
        </div>
        <div>
          I built this site as a place to share my projects, a little about me,
          and a somewhere me and others can share ideas. I enjoy building fun
          things for the interent that I find entertaining. Check them out in my{" "}
          <a href="./projects">projects</a>.
        </div>
        <div>
          Feel free to contact me via email at{" "}
          <a href="mailto:dakota.bryan@colorado.edu">
            dakota.bryan@colorado.edu
          </a>
        </div>
      </div>
      <div id="imageCont"></div>
    </div>
  );
}
