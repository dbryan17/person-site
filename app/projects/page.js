import FvProject from "../components/projects/fv";
export default function Projects() {
  // const [wasmFoldOpen, setWasmFoldOpen] = useState(false);
  // const [mathFoldOpen, setMathFoldOpen] = useState(false);
  // const [appFoldOpen, setAppFoldOpen] = useState(false);
  return (
    <div className="slim-container">
      <section className="pageChunk">
        <section className="hero">
          <div className="hero-body">
            <p className="title has-text-success is-size-2">Projects</p>
            <p className="subtitle">
              A collection of past and current projects that I find interesting
            </p>
          </div>
        </section>
      </section>
      <FvProject />
    </div>
  );
}
