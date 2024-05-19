import Link from "next/link";
export default function InnerNavBar() {
  return (
    <div className="navbar-end">
      <Link href="/projects" className="navbar-item has-background-primary">
        Projects
      </Link>
      <div className="navbar-item has-dropdown is-hoverable">
        <Link className="navbar-link has-background-primary" href="/blogs">
          Blogs
        </Link>
        <div className="navbar-dropdown has-background-primary">
          <Link
            href="/bolgs/henry"
            className="navbar-item has-background-primary"
          >
            Henry's Blogs
          </Link>
        </div>
      </div>
      <div className="navbar-item has-dropdown is-hoverable">
        <Link className="navbar-link has-background-primary" href="/tools">
          Small Tools
        </Link>
        <div className="navbar-dropdown has-background-primary">
          <Link
            href="/tools/counter"
            className="navbar-item has-background-primary"
          >
            Counter
          </Link>
        </div>
      </div>
      <Link href="/now" className="navbar-item has-background-primary">
        Now
      </Link>
      <Link href="/resume" className="navbar-item has-background-primary">
        Resume
      </Link>
    </div>
  );
}
