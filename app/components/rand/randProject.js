"use client";

import { useState, useEffect } from "react";
import { projects } from "@/app/data/projects/projects";
import Project from "../projects/general";
export default function RandProjectCard() {
  const [randProject, setRandProject] = useState("");
  useEffect(() => {
    let rand = Math.floor(Math.random() * projects.length);
    setRandProject(projects[rand]);
  }, []);

  // okay, the whole reason I need useEffects in these random components is because
  // there is a static version pre rendered on the server before it runs in the clinet
  // https://nextjs.org/docs/app/building-your-application/rendering/client-components

  // https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
  if (!randProject) {
    return <div></div>;
  }

  return (
    <div>
      <Project specs={randProject} />
    </div>
  );
}

export const dynamic = "force-dynamic";
