import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const artworks = [
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

type ArtworkPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return artworks.map((artwork) => ({
    id: String(artwork.id),
  }));
}

export async function generateMetadata({
  params,
}: ArtworkPageProps): Promise<Metadata> {
  const { id } = await params;
  const artwork = artworks.find((item) => item.id === Number(id));

  if (!artwork) {
    return { title: "Artwork Not Found" };
  }

  return {
    title: `Artwork No. ${artwork.id}`,
    description: `Discover artwork number ${artwork.id} by Jerusalem artist Mattis Cohen.`,
  };
}

export default async function ArtworkPage({ params }: ArtworkPageProps) {
  const { id } = await params;
  const artwork = artworks.find((item) => item.id === Number(id));

  if (!artwork) {
    notFound();
  }

  const number = String(artwork.id).padStart(2, "0");

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
          <Link href="/#gallery" className="nav-link active">
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

      <section className="artwork-detail-page">
        <Link href="/#gallery" className="text-link back-link">
          <span aria-hidden="true">←</span> Back to the Gallery
        </Link>

        <div className="artwork-detail-grid">
          <div className="artwork-detail-image-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="artwork-detail-image"
              src={`/assets/Images/${artwork.id}.jpg`}
              alt={`Artwork number ${artwork.id} by Mattis Cohen`}
            />

            {artwork.sold && (
              <span className="sold-badge detail-sold-badge">Sold</span>
            )}
          </div>

          <div className="artwork-detail-info">
            <p className="eyebrow">ORIGINAL ARTWORK</p>

            <h1>Artwork No. {number}</h1>

            <p className="detail-price">{artwork.price}</p>

            <div className="detail-divider" />

            <p className="detail-description">
              A distinctive creation by Jerusalem artist Mattis Cohen.
              Each artwork reflects the individual character of his
              handmade artistic practice.
            </p>

            <p className="detail-description">
              For further information about this piece, its
              availability, or other creations, please get in touch.
            </p>

            {artwork.sold ? (
              <div className="availability-note">
                This artwork has been sold.
              </div>
            ) : (
              <Link
                href={`/Form.html?artwork=${artwork.id}`}
                className="button button-primary detail-enquire"
              >
                Enquire About This Piece <span aria-hidden="true">↗</span>
              </Link>
            )}

            <p className="detail-reference">
              REFERENCE: MC-{number}
            </p>
          </div>
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