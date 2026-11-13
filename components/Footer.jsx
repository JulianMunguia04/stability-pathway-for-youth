import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">

        {/* Main footer content */}
        <div className="footer-main">

          <div className="footer-brand">
            <h2>Stability Pathway</h2>
            <p>
              A guide to resources, support, and opportunities
              for youth in Edmonton.
            </p>
          </div>

          <div className="footer-links">
            <h3>Explore</h3>
            <Link href="/">Home</Link>
            <Link href="/#pathway">Explore the Pathway</Link>
            <Link href="/organizations">Organizations</Link>
            <Link href="/about">About</Link>
          </div>

          <div className="footer-links">
            <h3>Resources</h3>
            <Link href="/immediate-necessities">Immediate Necessities</Link>
            <Link href="/transportation">Transportation</Link>
            <Link href="/employment">Employment</Link>
            <Link href="/transitional-housing">Housing Support</Link>
          </div>

          <div className="footer-contact">
            <h3>Need Support?</h3>
            <p>
              If you are looking for help, explore the pathway
              to discover organizations and resources that may
              be able to support you.
            </p>
            <Link href="/#pathway" className="footer-button">
              Find Resources
            </Link>
          </div>

        </div>

        {/* Bottom footer bar */}
        <div className="footer-bottom">
          <p>© 2026 Stability Pathway for Youth</p>          
          <p>Created to help youth find their next step.</p>
        </div>

      </div>
    </footer>
  );
}