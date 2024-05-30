import { blogs } from "@/app/data/blogs/henryBlogs";
import Blog from "@/app/components/blog/blog";

export default function BlogPage({ params }) {
  const blog = blogs[params.id];

  // title, author, date, content
  return <Blog blog={blog} firstName="Henry" fullName="Henry Piedra" />;
}
