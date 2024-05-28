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

  return (
    <nav className="navbar has-background-primary">
      <div className="navbar-brand">
        <Link
          href="/"
          className="navbar-item has-background-primary"
          onClick={() => setBurgerIsActive(false)}
        >
          Dakota Bryan
        </Link>
        <div
          className={"navbar-burger" + (burgerIsActive ? " is-active" : "")}
          onClick={() => setBurgerIsActive((state) => !state)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>

      <div
        className={
          "has-background-primary navbar-menu" +
          (burgerIsActive ? " is-active" : "")
        }
        id="navContent"
      >
        <div className="navbar-start"></div>
        <div className="navbar-end has-background-primary">
          <InnerNavBar setBurgerNotActive={() => setBurgerIsActive(false)} />
        </div>
      </div>
    </nav>
  );
}
