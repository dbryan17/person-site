import Link from "next/link";
import { parse } from "@/app/utils/parser/parser";
import Disclaimer from "../disclaimer/disclaimer";

export default function Blog({ blog, firstName, fullName }) {
  if (!blog || !blog.content) {
    return (
      <div className="slim-container pageContainer">
        <h2>
          That&apos;s not right,{" "}
          <Link href={"/blogs/" + firstName.toLowerCase()}>
            return to {firstName}&apos;s home page
          </Link>
          ?
        </h2>
      </div>
    );
  }
  // title, author, date, content
  return (
    <div className="slim-container">
      <section className="page-chunk">
        <section className="hero">
          <div className="hero-body">
            <div className="title has-text-success is-size-2">
              {parse(blog.title, true)}
            </div>
            <div className="subtitle">
              {parse(blog.date, true)}
              <p className="inner-page-chunk"> </p>

              <Disclaimer name={fullName} isNotPlural={true} />
            </div>
          </div>
        </section>
        <div>{parse(blog.content)}</div>
      </section>
    </div>
  );
}
