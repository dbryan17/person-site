"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function InnerNavBar({ setBurgerNotActive }) {
  const pathname = usePathname();

  const pathHas = (str) => {
    return pathname.includes(str);
  };

  const [blogsDropdownOpen, setBlogsDropdownOpen] = useState(false);
  const [smallToolsDropdownOpen, setSmallToolsDropdownOpen] = useState(false);

  console.log(blogsDropdownOpen);
  return (
    <>
      <Link
        href="/about"
        className={
          "navbar-item has-background-primary" +
          (pathHas("about") ? " navbar-item-active" : "")
        }
        onClick={setBurgerNotActive}
      >
        About
      </Link>
      <Link
        href="/projects"
        className={
          "navbar-item has-background-primary" +
          (pathHas("projects") ? " navbar-item-active" : "")
        }
        onClick={setBurgerNotActive}
      >
        Projects
      </Link>
      <div
        className={
          "navbar-item has-dropdown is-hoverable has-background-primary" +
          (blogsDropdownOpen ? " is-active" : "")
        }
      >
        <Link
          className={
            "navbar-link has-background-primary is-arrowless" +
            (pathHas("blogs") ? " navbar-item-active" : "")
          }
          href="/blogs"
          onClick={() => {
            setBurgerNotActive();
            setBlogsDropdownOpen(false);
          }}
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
            onClick={setBurgerNotActive}
          >
            Henry&apos;s Blogs
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
          onClick={setBurgerNotActive}
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
            onClick={setBurgerNotActive}
          >
            Counter
          </Link>
        </div>
      </div>
      <Link
        href="/cv"
        className={
          "navbar-item has-background-primary" +
          (pathHas("cv") ? " navbar-item-active" : "")
        }
        onClick={setBurgerNotActive}
      >
        CV
      </Link>
    </>
  );
}
