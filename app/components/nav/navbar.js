"use client";
// do I need use client??? test
import Link from "next/link";
import InnerNavBar from "./innerNavbar";
import { useState } from "react";

/*
TODO 
- make the burger work 
*/
export default function Navbar() {
  const [burgerIsActive, setBurgerIsActive] = useState(false);
  console.log(burgerIsActive);
  return (
    <nav className="navbar has-background-primary">
      <Link
        href="/"
        className="navbar-item navbar-brand has-background-primary"
      >
        Dakota Bryan
      </Link>
      {/* todo fix this */}
      <div
        className={"navbar-burger" + (burgerIsActive ? " is-active" : "")}
        data-target={burgerIsActive ? "navbar-content" : ""}
        onClick={() => setBurgerIsActive((state) => !state)}
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </div>
      <div className="navbar-menu">
        <InnerNavBar />
      </div>
    </nav>
  );
}
