
"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import IntroCard from "@/components/IntroCard";

const stages = [
  {
    number: "01",
    title: "Immediate Necessities",
    description:
      "Find support for essentials such as food, clothing, personal care items, and emergency shelter.",
    categories: ["Food", "Clothing", "Emergency Shelter"],
    slug: "immediate-necessities",
    icon: "🌱",
  },
  {
    number: "02",
    title: "Transportation",
    description:
      "Explore transportation assistance to help you get to appointments, work, school, and essential services.",
    categories: ["Bus Passes", "Transportation Support"],
    slug: "transportation",
    icon: "🦋",
  },
  {
    number: "03",
    title: "Identification & Documentation",
    description:
      "Get help obtaining important documents such as government identification, birth certificates, and other records.",
    categories: ["Government ID", "Birth Certificates"],
    slug: "identification",
    icon: "🍃",
  },
  {
    number: "04",
    title: "Court & Legal Issues",
    description:
      "Access legal information, advocacy, and guidance when navigating court matters or legal challenges.",
    categories: ["Legal Aid", "Advocacy"],
    slug: "legal-support",
    icon: "🌿",
  },
  {
    number: "05",
    title: "Finance & Income",
    description:
      "Learn about financial assistance, income support, budgeting resources, and benefits you may qualify for.",
    categories: ["Income Support", "Financial Assistance"],
    slug: "finance",
    icon: "🌼",
  },
  {
    number: "06",
    title: "Employment",
    description:
      "Find employment programs, career guidance, job training, and support with entering the workforce.",
    categories: ["Job Search", "Career Development"],
    slug: "employment",
    icon: "🌳",
  },
  {
    number: "07",
    title: "Transitional Housing",
    description:
      "Explore housing programs that can help you move toward a safer and more stable living situation.",
    categories: ["Housing Programs", "Housing Support"],
    slug: "transitional-housing",
    icon: "🏡",
  },
  {
    number: "08",
    title: "Medical & Mental Health",
    description:
      "Connect with physical health services, counselling, mental health support, and wellness resources.",
    categories: ["Healthcare", "Mental Health"],
    slug: "health",
    icon: "🌸",
  },
  {
    number: "09",
    title: "Education",
    description:
      "Discover educational opportunities, academic support, alternative learning, and pathways to further education.",
    categories: ["Education", "Learning Support"],
    slug: "education",
    icon: "📚",
  },
];

const stonePositions = [
  { left: "50%", top: "5%", rotate: "-18deg" },
  { left: "45%", top: "17%", rotate: "12deg" },
  { left: "39%", top: "30%", rotate: "-8deg" },
  { left: "36%", top: "43%", rotate: "20deg" },
  { left: "40%", top: "57%", rotate: "-14deg" },
  { left: "47%", top: "72%", rotate: "10deg" },
  { left: "50%", top: "88%", rotate: "-6deg" },
];

function StoneConnector({ direction, connectorIndex }) {
  return (
    <div
      className={`stone-connector ${direction}`}
      aria-hidden="true"
    >
      {stonePositions.map((stone, index) => (
        <span
          key={`${connectorIndex}-${index}`}
          className="path-stone"
          data-stone
          style={{
            left: stone.left,
            top: stone.top,
            "--stone-rotation": stone.rotate,
          }}
        />
      ))}
    </div>
  );
}

export default function ForestPathway() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-active");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    const elements = section.querySelectorAll(
      ".pathway-card, .pathway-intro-card, [data-stone]"
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="forest-pathway"
      id="pathway"
      ref={sectionRef}
    >
      {/* INTRODUCTION */}
      <div className="pathway-introduction">
        <IntroCard />
      </div>

      {/* STONES CONNECT INTRODUCTION TO THE RESOURCE PATH */}
      <StoneConnector
        direction="trail-right"
        connectorIndex="intro"
      />

      {/* RESOURCE STAGES */}
      <div className="pathway-container">
        <div className="pathway-stages">
          {stages.map((stage, index) => (
            <div className="pathway-item" key={stage.slug}>
              <article
                className={`pathway-card ${
                  index % 2 === 0 ? "card-left" : "card-right"
                }`}
              >
                <div className="stage-visual">
                  <span className="stage-number">
                    {stage.number}
                  </span>

                  <span className="stage-icon" aria-hidden="true">
                    {stage.icon}
                  </span>

                  <span className="visual-caption">
                    PATHWAY STAGE
                  </span>
                </div>

                <div className="stage-content">
                  <span className="stage-label">
                    STAGE {stage.number}
                  </span>

                  <h3>{stage.title}</h3>

                  <p>{stage.description}</p>

                  <div className="stage-categories">
                    {stage.categories.map((category) => (
                      <span key={category}>{category}</span>
                    ))}
                  </div>

                  <Link
                    href={`/resources/${stage.slug}`}
                    className="stage-link"
                  >
                    Explore resources <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>

              {index < stages.length - 1 && (
                <StoneConnector
                  direction={
                    index % 2 === 0
                      ? "trail-right"
                      : "trail-left"
                  }
                  connectorIndex={index}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
