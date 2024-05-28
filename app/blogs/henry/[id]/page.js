import { blogs } from "@/app/data/blogs/henryBlogs";

export default function BlogPage({ params }) {
  return <div>{blogs[params.id].title}</div>;
}
