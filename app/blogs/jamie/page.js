import Link from "next/link";
import { blogs } from "@/app/data/blogs/jamieBlogs";
import Disclaimer from "@/app/components/disclaimer/disclaimer";
import Image from "next/image";
export default function HenryHome() {
  return (
    <div className="slim-container">
      <section className="page-chunk">
        <section className="hero">
          <div className="hero-body">
            <p className="title has-text-success is-size-2">Jamie Cole</p>
            <p className="subtitle"></p>
          </div>
        </section>

        <div className="inner-page-chunk">
          <figure className="image is-128x128 image-float-right" id="henryface">
            <Image
              src="/pictures/jamie/home/jamie.jpeg"
              width={200}
              height={200}
              alt="picture of jamie"
            />
          </figure>
          <p className="content">
            Hello my name is Jamie and I am very very excited to have a place
            where I can share my ideas. A little about me; I finished college a
            year ago and am trying my hand as a professional engineer… I’m not a
            fan. I really just want to play outside. I am woefully unqualified
            to spread the ideas that are in my head to the public, but having a
            forum to do so is still fun! My opinions change on a dime anyways,
            so chances are by the time you read anything I’ve written here the
            seedling that idea sprouted from has likely perished. That being
            said, I think any and all creative endeavors are worth pursuing,
            even if it leads to nowhere. I see writing as a wonderful example of
            this. The act of crafting words and shaping it as it develops is
            incredibly engaging. One of the best examples of journey over
            destination. So welcome and enjoy my random thoughts.
          </p>
        </div>
        <hr className="has-background-primary" />
      </section>

      <section className="page-chunk">
        <h1 className="title has-text-success is-size-3">Book Reviews</h1>
        <div className="subtitle">
          <p className="inner-page-chunk"></p>
          <Disclaimer name="Jamie Cole" />
        </div>
        <div>
          {Object.entries(blogs)
            .reverse()
            .map((kvPair) => (
              <div className="inner-page-chunk" key={kvPair[0]}>
                <Link
                  className="blog-link is-size-5"
                  href={"./jamie/" + kvPair[0]}
                >
                  {kvPair[1].title}
                </Link>
                <p className="blog-link-date">{kvPair[1].date}</p>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}
