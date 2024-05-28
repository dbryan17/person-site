import { blogs } from "@/app/data/blogs/henryBlogs";
import { parse } from "@/app/utils/parser/parser";
import Link from "next/link";

export default function BlogPage({ params }) {
  if (!blogs[params.id] || !blogs[params.id].content) {
    return (
      <div className="slim-container pageContainer">
        <h2>
          That&apos;s not right,{" "}
          <Link href="/blogs/henry">return to Henry&apos;s home page</Link>?
        </h2>
      </div>
    );
  }
  const blog = blogs[params.id];

  // title, author, date, content
  return (
    <div className="slim-container">
      <section className="page-chunk">
        <section className="hero">
          <div className="hero-body">
            <p className="title has-text-success is-size-2">{blog.title}</p>
            <p className="subtitle">{blog.date}</p>
          </div>
        </section>
        <div>{parse(blog.content)}</div>
      </section>
    </div>
  );
}
