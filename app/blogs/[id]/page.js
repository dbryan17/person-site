import { trs } from "@/app/data/blogs/tripReports";
import Blog from "@/app/components/blog/blog";
export default function BlogPage({ params }) {
  const blog = trs[params.id];

  // title, author, date, content
  return (
    <Blog
      blog={blog}
      hasNoDisclaimer={true}
      firstName={"Dakota"}
      fullName={"Dakota Bryan"}
      key={params.id}
    />
  );
}
