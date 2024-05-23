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
            <img src="/pictures/henry/home/henry.jpeg" />
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
        <h2 className="subtitle">Blogs about something</h2>
        <div className="blog-snippet-container">
          <div className="blog-snippet has-background-link"></div>
          <div className="blog-snippet has-background-link"></div>

          <div className="blog-snippet has-background-link"></div>

          <div className="blog-snippet has-background-link"></div>

          <div className="blog-snippet has-background-link"></div>

          <div className="blog-snippet has-background-link"></div>
        </div>
      </section>
      <div className="img-container">
        {/* CHANGE TO <IMAGE></IMAGE> */}
        <figure className="meme-image" id="simpsons">
          <img src="/pictures/henry/home/simpsons.jpeg" />
        </figure>
        <figure className="meme-image" id="mets">
          <img src="/pictures/henry/home/mets.jpeg" />
        </figure>
      </div>
    </div>
  );
}
