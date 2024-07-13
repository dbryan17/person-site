"use client";
import { trs } from "@/app/data/blogs/tripReports";
import { useState, useEffect } from "react";
import BlogSnippet from "../blog/blogSnippet";
export default function RandBlogCard() {
  const [id, setId] = useState("");
  useEffect(() => {
    let rand = Math.floor(Math.random() * Object.keys(trs).length);
    setId(rand);
  });

  if (!trs[id]) {
    return <div></div>;
  }

  return (
    <div>
      <BlogSnippet blog={trs[id]} isTr={true} id={id} />
    </div>
  );
}
