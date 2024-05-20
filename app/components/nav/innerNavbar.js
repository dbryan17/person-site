import Link from "next/link";
import { usePathname } from "next/navigation";

export default function InnerNavBar() {
  const pathname = usePathname();
  console.log(pathname);

  const pathHas = (str) => {
    return pathname.includes(str);
  };

  return (
    <>
      <Link
        href="/about"
        className={
          "navbar-item has-background-primary" +
          (pathHas("about") ? " navbar-item-active" : "")
        }
      >
        About
      </Link>
      <Link
        href="/projects"
        className={
          "navbar-item has-background-primary" +
          (pathHas("projects") ? " navbar-item-active" : "")
        }
      >
        Projects
      </Link>
      <div className="navbar-item has-dropdown is-hoverable has-background-primary">
        <Link
          className={
            "navbar-link has-background-primary is-arrowless" +
            (pathHas("blogs") ? " navbar-item-active" : "")
          }
          href="/blogs"
        >
          Blogs
        </Link>
        <div className="navbar-dropdown has-background-primary">
          <Link
            href="/blogs/henry"
            className={
              "navbar-item has-background-primary" +
              (pathHas("henry") ? " navbar-item-active" : "")
            }
          >
            Henry's Blogs
          </Link>
        </div>
      </div>
      <div className="navbar-item has-dropdown is-hoverable has-background-primary">
        <Link
          className={
            "navbar-link has-background-primary is-arrowless" +
            (pathHas("tools") ? " navbar-item-active" : "")
          }
          href="/tools"
        >
          Small Tools
        </Link>
        <div className="navbar-dropdown has-background-primary">
          <Link
            href="/tools/counter"
            className={
              "navbar-item has-background-primary" +
              (pathHas("counter") ? " navbar-item-active" : "")
            }
          >
            Counter
          </Link>
        </div>
      </div>
      <Link
        href="/resume"
        className={
          "navbar-item has-background-primary" +
          (pathHas("resume") ? " navbar-item-active" : "")
        }
      >
        Resume
      </Link>
    </>
  );
}
