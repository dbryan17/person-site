"use client";
import { useState } from "react";
export default function Fold({ foldContent, foldText }) {
  const [foldOpen, setFoldOpen] = useState(false);
  return (
    <>
      {foldOpen ? (
        <>
          <a className="outline-link" onClick={() => setFoldOpen(false)}>
            Hide &uarr;
          </a>
          {foldContent}

          {/* <p className="inner-page-chunk">
            Fractal Voyager provides an innovative application of{" "}
            <a href="https://webassembly.org/" target="_blank">
              WebAssembly
            </a>
            . A source-to-source compiler translates custom scripts to C++,
            which can generate an array representation of the complex plane with
            color values. This compiler is compiled to WebAssembly allowing
            scripts to be enetered and compiled on the web. Then, the C++ that
            was generated is compiled to WebAssembly. This step is particularly
            tricky, and uses the core functionality of an{" "}
            <a href="https://github.com/jprendes/emception" target="_blank">
              in-broswer C++ code editor
            </a>
            . Finally, the WebAssembly is run on the web to generate fractals.
          </p> */}
        </>
      ) : (
        <>
          <div className="inner-page-chunk">
            <a className="outline-link" onClick={() => setFoldOpen(true)}>
              {foldText} &darr;
            </a>
          </div>
        </>
      )}
    </>
  );
}
