import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About the Artist",
  description:
    "Learn about Jerusalem artist Mattis Cohen and his distinctive handmade copper art, menorahs, vases, and bespoke creations.",
};

export default function AboutPage() {
  return (
    <main>
      <header className="site-header">
        <Link href="/" className="brand">
          <span className="brand-name">Mattis Cohen</span>
          <span className="brand-subtitle">ART · JERUSALEM</span>
        </Link>

        <nav className="main-nav" aria-label="Main navigation">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/#gallery" className="nav-link">
            Gallery
          </Link>
          <Link href="/about" className="nav-link active">
            About
          </Link>
          <Link href="/Form.html" className="nav-link nav-contact">
            Contact
          </Link>
        </nav>
      </header>

      <section className="about-hero">
        <p className="eyebrow">THE ARTIST BEHIND THE WORK</p>

        <h1>
          Individual by nature.
          <br />
          <span>Distinctive by design.</span>
        </h1>

        <p className="about-hero-description">
          Discover the work of Mattis Cohen, a Jerusalem artist whose
          handmade copper creations bring together craftsmanship,
          individuality, and artistic expression.
        </p>
      </section>

      <section className="about-body">
        <div className="about-image-wrap">
          <div className="about-image-placeholder">
            A closer look at the art of Mattis Cohen
          </div>
        </div>

        <div className="about-copy">
          <p className="eyebrow">ABOUT MATTIS COHEN</p>

          <h2>
            Every creation has
            <br />
            its own character.
          </h2>

          <p>
            Mattis Cohen is a Jerusalem artist specializing in copper
            art, with a particular focus on distinctive menorah
            designs. Each menorah is individually handmade, with its
            own style, structure, and personality.
          </p>

          <p>
            No two creations need to be alike. The individuality of
            each piece is central to the character of the work,
            transforming functional forms into distinctive works of
            art.
          </p>

          <p>
            Beyond menorahs, Mattis also creates striking vases and
            life-size replicas of stylized monograms for events.
            These pieces offer another expression of his interest in
            unique forms and personalized artistic creations.
          </p>

          <p>
            Whether creating a menorah or a bespoke piece, the aim is
            to produce something distinctive: an artwork with a
            presence and character of its own.
          </p>

          <Link href="/#gallery" className="text-link">
            Explore the collection <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="artist-cta">
        <div className="cta-inner">
          <p className="eyebrow">INTERESTED IN A PIECE?</p>

          <h2>
            Art worth
            <br />
            <span>discovering.</span>
          </h2>

          <p>
            Browse the gallery and get in touch to enquire about an
            artwork or a custom creation.
          </p>

          <div className="cta-actions">
            <Link href="/#gallery" className="button button-light">
              View the Gallery <span aria-hidden="true">↗</span>
            </Link>

            <Link href="/Form.html" className="cta-instagram">
              Contact Mattis →
            </Link>
          </div>
        </div>

        <div className="cta-mark" aria-hidden="true">
          MC
        </div>
      </section>

      <footer className="site-footer">
        <Link href="/" className="footer-brand">
          Mattis Cohen Art
        </Link>

        <p>Handmade with character in Jerusalem.</p>

        <div className="footer-links">
          <Link href="/about">About</Link>
          <Link href="/#gallery">Gallery</Link>
          <Link href="/Form.html">Contact</Link>
        </div>

        <span className="copyright">
          © {new Date().getFullYear()} Mattis Cohen Art
        </span>
      </footer>
    </main>
  );
}