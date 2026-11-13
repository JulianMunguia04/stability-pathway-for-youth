
import Link from "next/link";

export default function Logo({ compact = false }) {
  return (
    <Link href="/" className="brand-logo" aria-label="Stability Pathway home">
      <svg
        viewBox="0 0 80 80"
        className="brand-mark"
        aria-hidden="true"
      >
        <circle
          cx="40"
          cy="40"
          r="36"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        {/* Winding pathway */}
        <path
          d="M40 67 C40 57 25 55 30 43 C34 34 49 38 49 27"
          fill="none"
          stroke="#D9C9A5"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Tree trunk */}
        <path
          d="M49 29 L49 39"
          stroke="#D9C9A5"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Tree branches */}
        <path
          d="M49 8 L34 29 L43 29 L30 42 L49 36 L65 42 L55 29 L63 29 Z"
          fill="#A8BE98"
        />

        {/* Decorative leaves */}
        <path
          d="M17 58 Q8 44 21 40 Q28 51 17 58Z"
          fill="#A8BE98"
        />
        <path
          d="M64 62 Q57 48 69 46 Q77 57 64 62Z"
          fill="#A8BE98"
        />
      </svg>

      {!compact && (
        <span className="brand-text">
          <span className="brand-name">Stability Pathway</span>
          <span className="brand-subtitle">FOR YOUTH</span>
        </span>
      )}
    </Link>
  );
}
