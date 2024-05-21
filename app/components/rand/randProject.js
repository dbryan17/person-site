"use client";

const projects = [
  {
    title: "Sudoku Graph Theory Web App",
    subtitle: "asdfasdfsaf",
    description: `
    • Investigated the graph representation of sudoku, and created a web application that generates valid
puzzles and allows the user to solve them in both grid and graph form.
• Implemented graph coloring algorithms to auto-solve the puzzle, complete with animations to illustrate
how they work.
• Developed many algorithms that represent human-solving strategies, allowing for an advanced help
feature which reveals solving methods to the user.
• Delivered a detailed report on the sudoku graph and the implementation of my application. Presented the
work via an oral presentation.
    `,
    link: "adsfsadf",
    linkDescription: "asdfas",
    imageSrc: "/pictures/projectCards/orange.jpg",
    fullPage: "asdfasdf",
  },
  {
    title:
      "Fractal Voyager: A Web Application for Exploring and Studying Complex Dynamics",
    subtitle:
      "Dakota Bryan\nComputer Science Honors SYE, St. Lawrence University\nFaculty Advisor Kevin Angstadt\nMay 2023",
    description: `
    Developed a web application to fill a void in web-based fractal generating software, an essential aspect
of complex dynamics research. It supports point orbit visualizations and parameter customizations to
allow for the exploration of any area of the complex plane.
• Crafted a grammar definition and source-to-source compiler to create a domain-specific scripting
language. It enables users to generate fractals based on iterated functions and conditions, in both the
parameter and dynamical plane.
• Made use of WebAssembly to allow this computationally intensive technology to be run on the web
efficiently by compiling all time-consuming aspects of the app to WebAssembly, some while in the
browser.
• Authored an extensive research report that outlines the research involved in, and contributions of,
Fractal Voyager. I also presented findings via a poster presentation.`,
    link: "asdfadsf",
    linkDescription: "asdf",
    imageSrc: "/pictures/projectCards/blue.png",
    fullPage: "asdf",
  },
  {
    title: "Mountain Project Climbing Database & Web Scraper",
    subtitle: "asdfasdfasd",
    description: `
    Designed and provisioned a relational database to hold data from a social media driven rock climbing
guidebook.
• Created a web scraper that collected approximately ten percent of all the data on the guidebook
application, corresponding to over one million rows in one of the tables.
• Wrote complex SQL queries to gain insights on climbing communities and areas based on the data.
    `,
    link: "dsfasdf",
    linkDescription: "asdfasdf",
    imageSrc: "/pictures/projectCards/red.jpg",
    fullPage: "asdfsd",
  },
];

import ProjectCard from "../projectCards/projectCard";
import { useState, useEffect } from "react";
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
  useEffect(() => {});
  let randSize = Math.floor(Math.random() * 25);
  console.log(randSize);
  const array = Array.from({ length: randSize }, (_, index) => index);
  console.log(array);
  return (
    <div>
      <ProjectCard specs={randProject} />
    </div>
  );
}

export const dynamic = "force-dynamic";
