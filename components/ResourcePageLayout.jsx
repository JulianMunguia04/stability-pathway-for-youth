
import Link from "next/link";

export default function ResourcePageLayout({
  eyebrow,
  title,
  description,
  photo,
  children,
}) {
  return (
    <main className="resource-detail-page">
      <div className="resource-breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/resources">Resources</Link>
        <span>/</span>
        <span>{title}</span>
      </div>

      <header className="resource-detail-hero">
        <div className="resource-detail-hero-content">
          <span className="resource-eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>

        <div className="resource-detail-photo">
          <img src={`/${photo}`} alt={`${title} — youth support`} />
        </div>
      </header>

      <div className="resource-detail-layout">
        <aside className="resource-sidebar">
          <span className="resource-sidebar-heading">ON THIS PAGE</span>
          <nav>
            <a href="#overview">Overview</a>
            <a href="#programs">Available Programs</a>
            <a href="#organizations">Organizations</a>
            <a href="#important-information">Important Information</a>
          </nav>
          <Link href="/resources" className="resource-back-link">
            ← All resources
          </Link>
        </aside>

        <div className="resource-detail-content">
          {children}
        </div>
      </div>

      <div className="resource-last-verified">
        <span>Information last reviewed: </span>
        <strong>[Insert verification date]</strong>
        <p>
          Program information may change. Please contact the organization to
          confirm current availability, requirements, and application details.
        </p>
      </div>
    </main>
  );
}
