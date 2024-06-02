"use client";
import { useState } from "react";
export default function Fold({ foldContent, title, isInner }) {
  const [foldOpen, setFoldOpen] = useState(false);

  // if it is an inner fold, we need an additional spacer above because the content of the previous includes this one, so we are missing spacing
  // also we already have the space from the previous one at the bottom, so to make up for the additonal we need to remove the other inners
  return (
    <>
      {isInner ? <div className="inner-page-chunk"></div> : ""}
      {foldOpen ? (
        <>
          <a className="outline-link" onClick={() => setFoldOpen(false)}>
            Hide &uarr;
          </a>
          <div className={isInner ? "" : ""}>{foldContent}</div>
        </>
      ) : (
        <>
          <div className={isInner ? "" : "inner-page-chunk"}>
            <a className="outline-link" onClick={() => setFoldOpen(true)}>
              {title} &darr;
            </a>
          </div>
        </>
      )}
    </>
  );
}
