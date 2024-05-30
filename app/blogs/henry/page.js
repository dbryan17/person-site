import Link from "next/link";
import { blogs } from "@/app/data/blogs/henryBlogs";
import Disclaimer from "@/app/components/disclaimer/disclaimer";
import Image from "next/image";

export default function HenryHome() {
  return (
    <div className="slim-container">
      <section className="page-chunk">
        <section className="hero">
          <div className="hero-body">
            <p className="title has-text-success is-size-2">
              HP: American Hero
            </p>
            <p className="subtitle">Blogs by Henry Piedra</p>
          </div>
        </section>

        <div className="inner-page-chunk">
          <figure className="image is-128x128 image-float-right" id="henryface">
            <Image
              src="/pictures/henry/home/henrytwo.jpeg"
              width={200}
              height={200}
              alt="picture of henry"
            />
            {/* this one is slightly better quality */}
            {/* <img src="/pictures/henry/home/henrytwo.jpeg" /> */}
          </figure>
          <p className="content">
            This is my super cool column here on dakota.quest. A little
            background about myself: I have a college degree, which makes me
            really smart. One time I saw a guy dangling another guy off a bridge
            and I did nothing to intervene. I enjoy loud music and secondary New
            York Sports teams. I’m unsure what I will write here, but I assure
            you it’ll be fantastic. Some people believe that you go to heaven or
            hell when you die, I don’t really have a horse in that race though.
            I am much more interested in cool things, like amphibians and the
            sopranos. So yeah, pretty awesome bio. Welcome to a paradise of
            stupid opinions, stories, and analysis.
          </p>
        </div>
        <hr className="has-background-primary" />
      </section>

      <section className="page-chunk">
        <h1 className="title has-text-success is-size-3">The Junk Drawer</h1>
        <div className="subtitle">
          <p className="inner-page-chunk">Blogs about something</p>
          <Disclaimer name="Henry Piedra" />
        </div>
        <div>
          {Object.entries(blogs)
            .reverse()
            .map((kvPair) => (
              <div className="inner-page-chunk" key={kvPair[0]}>
                <Link
                  className="blog-link is-size-5"
                  href={"./henry/" + kvPair[0]}
                >
                  {kvPair[1].title}
                </Link>
                <p className="blog-link-date">{kvPair[1].date}</p>
              </div>
            ))}
        </div>
      </section>
      <div className="img-container">
        {/* CHANGE TO <IMAGE></IMAGE> */}
        <figure className="meme-image" id="simpsons">
          <Image
            src="/pictures/henry/home/simpsons.jpeg"
            width={400}
            height={400}
            alt="simpsons meme"
          />
        </figure>
        <figure className="meme-image" id="mets">
          <Image
            src="/pictures/henry/home/mets.jpeg"
            width={400}
            height={400}
            alt="the mets"
          />
        </figure>
      </div>
    </div>
  );
}
