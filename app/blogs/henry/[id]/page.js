import { blogs } from "@/app/data/blogs/henryBlogs";
import { parse } from "@/app/utils/parser/parser";

export default function BlogPage({ params }) {
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
