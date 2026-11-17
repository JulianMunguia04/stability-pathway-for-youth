
import Link from "next/link";

const resourceCategories = [
  {
    number: "01",
    title: "Housing & Shelter",
    description:
      "Explore emergency shelter, transitional housing, housing support programs, and services that can help you work toward stable, long-term housing.",
    image: "youth-housing-support.jpg",
    tags: ["Emergency Shelter", "Transitional Housing", "Housing First"],
    href: "/resources/housing",
  },
  {
    number: "02",
    title: "Identification & Documentation",
    description:
      "Understand how to obtain important documents, including Alberta identification, birth certificates, health cards, passports, and other government records.",
    image: "youth-documentation-support.jpg",
    tags: ["Government ID", "Birth Certificates", "Applications"],
    href: "/resources/identification",
  },
];

export default function ResourcesPage() {
  return (
    <main className="resources-page">
      <section className="resources-hero">
        <div className="resources-hero-content">
          <span className="resource-eyebrow">STABILITY PATHWAY FOR YOUTH</span>
          <h1>Resource Directory</h1>
          <p>
            Finding the right support can be difficult. This directory brings
            together local programs, organizations, and practical information
            to help you understand your options and take your next step.
          </p>
          <div className="resources-hero-note">
            Explore the areas below to find services, eligibility information,
            contact details, and guidance on how to access support.
          </div>
        </div>
        <div className="resources-hero-image">
          <img
            src="/youth-community-support.jpg"
            alt="Youth receiving community support"
          />
        </div>
      </section>

      <section className="resource-directory-section">
        <div className="resource-section-heading">
          <div>
            <span className="resource-eyebrow">EXPLORE SUPPORT</span>
            <h2>Where would you like to start?</h2>
          </div>
          <p>
            You do not need to follow a particular order. Start with whichever
            area best reflects what you need right now.
          </p>
        </div>

        <div className="resource-directory-grid">
          {resourceCategories.map((resource) => (
            <article className="resource-directory-card" key={resource.number}>
              <div className="resource-card-image">
                <img
                  src={`/${resource.image}`}
                  alt={resource.title}
                />
                <span className="resource-card-number">{resource.number}</span>
              </div>

              <div className="resource-card-content">
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>

                <div className="resource-tags">
                  {resource.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <Link href={resource.href} className="resource-card-link">
                  Explore resources <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="resource-help-note">
        <div>
          <span className="resource-eyebrow">A NOTE BEFORE YOU BEGIN</span>
          <h2>Every situation is different.</h2>
          <p>
            Program requirements, availability, and application processes can
            change. Contact an organization directly to confirm its current
            services and eligibility requirements before making plans.
          </p>
        </div>
      </section>
    </main>
  );
}
