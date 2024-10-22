import Image from "next/image";
import Link from "next/link";
import "../page.css";

const Blog2 = () => {
  return (
    <div className="blog-container">
      <header className="blog-header">
        <h1>How To Mix Guitars Effectively</h1>
        <div className="tag">Mixing</div>
      </header>

      <section className="blog-content">
        <Image
          src={"/images/blog2.jpg"}
          alt="How To Mix Guitars Effectively"
          width={800}
          height={400}
        />

        <article className="blog-article">
          <h2>Introduction</h2>
          <p>
            Mixing guitars can be challenging, especially when you need them to
            sit perfectly in a mix without overpowering other elements. In this
            guide, we will explore some of the most effective ways to mix
            guitars for a polished and professional sound.
          </p>

          <h2>Step 1: EQ and Compression</h2>
          <p>
            Use EQ to cut out unnecessary frequencies that clash with other
            instruments. Apply compression to ensure the guitar tracks stay
            dynamic but controlled, avoiding excessive peaks.
          </p>

          <h2>Step 2: Panning and Reverb</h2>
          <p>
            Panning guitars to opposite sides can give them more space in the
            mix. Adding reverb helps the guitars blend into the overall mix
            without sounding too dry.
          </p>

          <h2>Conclusion</h2>
          <p>
            By applying proper EQ, compression, and panning techniques, you can
            achieve a well-balanced guitar mix that complements the rest of your
            track.
          </p>
        </article>
      </section>

      <footer className="blog-footer">
        <Link href="/all-blogs">
          <a>Back to Blogs</a>
        </Link>
      </footer>
    </div>
  );
};

export default Blog2;
