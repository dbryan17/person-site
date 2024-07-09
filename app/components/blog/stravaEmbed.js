"use client";
import { useEffect } from "react";

export default function StravaEmbed({ id }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://strava-embeds.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [id]);

  return (
    <>
      <div className="stravaCont" key={id}>
        <div
          className="strava-embed-placeholder"
          data-embed-type="activity"
          data-embed-id={id}
          data-style="standard"
          key={id + "0"}
        ></div>
      </div>
      {/* <script src="https://strava-embeds.com/embed.js"></script> */}
      {/* <iframe
        className="strava-embed-placeholder"
        data-embed-type="activity"
        data-embed-id={id}
        data-style="standard"
      ></iframe> */}
    </>
  );
}
