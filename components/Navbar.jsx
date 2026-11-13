
import Link from "next/link";
import Logo from "./Logo";

const stages = [
  ["01", "Immediate Necessities", "immediate-necessities"],
  ["02", "Transportation", "transportation"],
  ["03", "Identification & Documentation", "identification"],
  ["04", "Court & Legal Issues", "legal"],
  ["05", "Finance & Income", "finance"],
  ["06", "Employment", "employment"],
  ["07", "Transitional Housing", "housing"],
  ["08", "Medical & Mental Health", "health"],
  ["09", "Education", "education"],
];

const organizations = [
  "Bissell Centre",
  "Hope Mission",
  "The Mustard Seed",
  "Elizabeth Fry Society",
  "Old Strathcona Youth Society",
  "YESS",
  "iHuman",
  "CHEW Project",
];

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar">
        <Logo />

        <div className="desktop-nav">
          <Link href="/" className="nav-link">
            Home
          </Link>

          <details className="nav-dropdown">
            <summary className="nav-link">
              Pathway <span>⌄</span>
            </summary>

            <div className="dropdown-menu pathway-menu">
              {stages.map(([number, title, slug]) => (
                <Link
                  href={`/resources/${slug}`}
                  key={slug}
                  className="dropdown-link"
                >
                  <span className="dropdown-number">{number}</span>
                  {title}
                </Link>
              ))}
            </div>
          </details>

          <details className="nav-dropdown">
            <summary className="nav-link">
              Organizations <span>⌄</span>
            </summary>

            <div className="dropdown-menu">
              {organizations.map((name, index) => (
                <Link
                  href={`/organizations/${index}`}
                  key={name}
                  className="dropdown-link"
                >
                  {name}
                </Link>
              ))}
            </div>
          </details>

          <Link href="/about" className="nav-link">
            About
          </Link>
        </div>

        <details className="mobile-nav">
          <summary aria-label="Open navigation menu">
            <span></span>
            <span></span>
            <span></span>
          </summary>

          <div className="mobile-menu">
            <Link href="/">Home</Link>
            <Link href="#pathway">Explore the Pathway</Link>
            <Link href="#organizations">Organizations</Link>
            <Link href="/about">About</Link>
          </div>
        </details>
      </nav>
    </header>
  );
}
