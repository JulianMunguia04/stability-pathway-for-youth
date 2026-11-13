
export default function IntroCard() {
  return (
    <article className="intro-card pathway-intro-card">
      <div className="intro-emblem">
        <svg viewBox="0 0 80 80" aria-hidden="true">
          <circle
            cx="40"
            cy="40"
            r="35"
            fill="none"
            stroke="#78916D"
            strokeWidth="1.5"
          />
          <path
            d="M40 65 C40 54 26 52 31 42 C35 33 49 37 49 25"
            fill="none"
            stroke="#A58B66"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M49 8 L34 29 L43 29 L30 42 L49 36 L65 42 L55 29 L63 29 Z"
            fill="#78916D"
          />
        </svg>
      </div>

      <span className="intro-eyebrow">
        WELCOME TO YOUR PATHWAY
      </span>

      <h1>
        Every journey
        <br />
        starts somewhere.
      </h1>

      <div className="intro-divider" />

      <p>
        Stability looks different for everyone.
        Whether you are looking for immediate support,
        a place to call home, employment, or opportunities
        for the future, this pathway can help you find
        the resources available to you.
      </p>

      <p className="intro-emphasis">
        Explore at your own pace. Start wherever you need.
      </p>
    </article>
  );
}
