import Link from "next/link";

type Artwork = {
  id: number;
  price: string;
  sold?: boolean;
};

const artworks: Artwork[] = [
  { id: 1, price: "$3,000" },
  { id: 2, price: "$1,500" },
  { id: 3, price: "$2,000" },
  { id: 4, price: "$5,000", sold: true },
  { id: 5, price: "$1,000", sold: true },
  { id: 6, price: "$1,000" },
  { id: 7, price: "$2,000", sold: true },
  { id: 8, price: "$3,000" },
  { id: 9, price: "$1,500" },
  { id: 10, price: "$2,500" },
  { id: 11, price: "$10,000" },
  { id: 12, price: "$2,000" },
  { id: 13, price: "$5,000" },
  { id: 14, price: "$3,000" },
  { id: 15, price: "$3,000" },
  { id: 16, price: "$3,000" },
  { id: 17, price: "$3,000" },
  { id: 18, price: "$3,000" },
  { id: 19, price: "$3,000" },
  { id: 20, price: "$3,000" },
  { id: 21, price: "$1,000" },
  { id: 22, price: "$7,000", sold: true },
  { id: 23, price: "$5,000", sold: true },
  { id: 24, price: "$1,500" },
  { id: 25, price: "$1,500" },
  { id: 26, price: "$1,500" },
  { id: 27, price: "$5,000" },
  { id: 28, price: "$1,500" },
  { id: 29, price: "$2,500" },
  { id: 30, price: "$2,000" },
];

const instagramUrl =
  "https://www.instagram.com/mattis_cohen_art/profilecard/?igsh=ZXpvYXlwcjhveDN2";

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <Link href="/" className="brand">
          <span className="brand-name">Mattis Cohen</span>
          <span className="brand-subtitle">ART · JERUSALEM</span>
        </Link>

        <nav className="main-nav" aria-label="Main navigation">
          <Link href="/" className="nav-link active">
            Home
          </Link>
          <Link href="#gallery" className="nav-link">
            Gallery
          </Link>
          <Link href="/about" className="nav-link">
            About
          </Link>
          <Link href="/Form.html" className="nav-link nav-contact">
            Contact
          </Link>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-image" aria-hidden="true" />

        <div className="hero-overlay" />

        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">
            HANDCRAFTED ART · JERUSALEM
          </p>

          <h1>
            Art with
            <br />
            <span>character.</span>
          </h1>

          <p className="hero-description">
            Distinctive copper menorahs, sculptural forms, and
            one-of-a-kind creations, individually handmade by
            Jerusalem artist Mattis Cohen.
          </p>

          <div className="hero-actions">
            <Link href="#gallery" className="button button-primary">
              Explore the Gallery <span aria-hidden="true">↗</span>
            </Link>

            <Link href="/about" className="button button-outline">
              Meet the Artist
            </Link>
          </div>

          <div className="hero-caption">
            <span className="caption-line" />
            <span>Every piece tells its own story</span>
          </div>
        </div>

        <div className="hero-index" aria-hidden="true">
          MC / 01
        </div>
      </section>

      <section className="intro-section section-padding">
        <div className="intro-label">
          <span className="eyebrow">THE ARTIST</span>
          <span className="small-divider" />
          <span className="muted-text">Jerusalem, Israel</span>
        </div>

        <div className="intro-content">
          <h2>
            A meeting of
            <br />
            <span>craft and imagination.</span>
          </h2>

          <p>
            Mattis Cohen creates individual works of art in copper,
            with a particular passion for distinctive menorah designs.
            Each piece is handmade, giving every creation its own
            structure, character, and presence.
          </p>

          <p>
            His work also includes sculptural vases and bespoke
            stylized monograms for special events.
          </p>

          <Link href="/about" className="text-link">
            Discover the artist <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="intro-decoration" aria-hidden="true">
          <span>MC</span>
          <span className="decoration-line" />
          <span>ONE OF A KIND</span>
        </div>
      </section>

      <section id="gallery" className="gallery-section section-padding">
        <div className="section-heading">
          <div>
            <p className="eyebrow">SELECTED WORKS</p>
            <h2>The Gallery</h2>
            <p className="section-description">
              Explore a collection of distinctive handmade creations.
            </p>
          </div>

          <span className="artwork-count">
            {String(artworks.length).padStart(2, "0")} ARTWORKS
          </span>
        </div>

        <div className="artwork-grid">
          {artworks.map((artwork, index) => (
            <article className="artwork-card" key={artwork.id}>
              <Link
                href={`/artwork/${artwork.id}`}
                className="artwork-image-link"
                aria-label={`View artwork ${artwork.id}`}
              >
                <div className="artwork-image-wrap">
                  <div className="artwork-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="artwork-image"
                    src={`/assets/Images/${artwork.id}.jpg`}
                    alt={`Handmade artwork by Mattis Cohen, piece ${artwork.id}`}
                    loading={index < 4 ? "eager" : "lazy"}
                  />

                  {artwork.sold && (
                    <span className="sold-badge">Sold</span>
                  )}

                  <span className="view-artwork">
                    View artwork <span aria-hidden="true">↗</span>
                  </span>
                </div>
              </Link>

              <div className="artwork-details">
                <div>
                  <p className="artwork-category">ORIGINAL ARTWORK</p>
                  <h3>Artwork No. {String(artwork.id).padStart(2, "0")}</h3>
                </div>

                <p className="artwork-price">{artwork.price}</p>
              </div>

              {artwork.sold && (
                <p className="sold-note">This piece has been sold.</p>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="artist-cta">
        <div className="cta-inner">
          <p className="eyebrow">A PIECE THAT SPEAKS TO YOU</p>
          <h2>
            Find something
            <br />
            <span>extraordinary.</span>
          </h2>
          <p>
            Interested in a particular piece or have a question about
            a custom creation? Get in touch to learn more.
          </p>

          <div className="cta-actions">
            <Link href="/Form.html" className="button button-light">
              Enquire About Artwork <span aria-hidden="true">↗</span>
            </Link>

            <a
              href={instagramUrl}
              className="cta-instagram"
              target="_blank"
              rel="noreferrer"
            >
              Follow on Instagram ↗
            </a>
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
          <Link href="#gallery">Gallery</Link>
          <Link href="/Form.html">Contact</Link>
          <a href={instagramUrl} target="_blank" rel="noreferrer">
            Instagram ↗
          </a>
        </div>

        <span className="copyright">
          © {new Date().getFullYear()} Mattis Cohen Art
        </span>
      </footer>
    </main>
  );
}