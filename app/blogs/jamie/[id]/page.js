import { blogs } from "@/app/data/blogs/jamieBlogs";
import Link from "next/link";
import Blog from "@/app/components/blog/blog";

export default function BlogPage({ params }) {
  const blog = blogs[params.id];

  // title, author, date, content
  return <Blog blog={blog} firstName="Jamie" />;
}
