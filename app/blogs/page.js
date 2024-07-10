import { trs } from "@/app/data/blogs/tripReports";
import Link from "next/link";

export default function BlogsHome() {
  return (
    <div className="slim-container pageContNonHero">
      <section className="page-chunk">
        <h1 className="title has-text-success is-size-3">Trip Reports</h1>
        <div className="subtitle is-size-6">
          <p className="inner-page-chunk">
            I find reading about the experiences of others on various climbs,
            rides, hikes, and other activities both useful and entertaining
            before attempting them myself. Therefore, I decided to write up some
            of my experiences in the hopes someone can gain insight from them.{" "}
          </p>
        </div>
        <div>
          {Object.entries(trs)
            .reverse()
            .map((kvPair) => (
              <div className="inner-page-chunk" key={kvPair[0]}>
                <Link
                  className="blog-link is-size-5"
                  // I shouldn't have to add blogs here, should be realt9ive, works for henrys and jamies, weird, TODO fix
                  href={"/blogs/tripReports/" + kvPair[0]}
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

  {
    /* // CW embed
    // <iframe */
  }
  {
    /* //   style={{ height: "90vh", width: "100%" }}
    //   src="https://crosshare.org/embed/H0lO84N26BgKdC1i2qnk/RE40STQaHPd2pcw9Dsbkbzk9dpn2"
    //   frameborder="0"
    //   allowfullscreen="true"
    //   allowtransparency="true"
    //   allow="clipboard-write *"
    // ></iframe> */
  }
}
