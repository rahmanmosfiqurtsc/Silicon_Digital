
import React from "react";
import "../../css/ServicesGrid.css";

const services = [
  {
    id: 1,
    title: "Custom Software Development",
    icon: "software",
    description:
      "Nisi, dis sed cursus eget pellentesque mattis. Odio eu proin aliquam a. Semper bibendum tellus non tellus, facilisi dignissim in quam massa. Aliquam, feugiat ut cum tellus, sit. Quis consectetur gravida ac ac lectus cursus egestas.",
  },
  {
    id: 2,
    title: "Software Integration",
    icon: "rocket",
    description:
      "Id eget blandit sapien cras massa lectus lorem placerat. Quam dolor commodo fermentum bibendum dictumst. Risus pretium eget at viverra eget. Sit neque adipiscing malesuada blandit justo, quam.",
  },
  {
    id: 3,
    title: "Mobile App Development",
    icon: "mobile",
    description:
      "Nunc, justo, diam orci, dictum purus convallis risus. Suscipit hendrerit at egestas id id blandit interdum est. Integer fames placerat turpis pretium quis hac leo lacus. Orci, dictum nunc mus quis semper eu bibendum enim, morbi.",
  },
  {
    id: 4,
    title: "Business Analytics",
    icon: "analytics",
    description:
      "Gravida eget euismod tempus diam dignissim quam. Dignissim magnis blandit faucibus convallis augue nisl, etiam. Feugiat ut molestie non arcu senectus sed. Diam pellentesque sit mattis nec amet varius nunc a sed.",
  },
  {
    id: 5,
    title: "Software Testing",
    icon: "testing",
    description:
      "Quis rhoncus quam venenatis facilisi. Risus dis libero nisl condimentum quis. Tincidunt ultricies vulputate ornare nunc rhoncus in. Ultrices dolor eu natoque volutpat praesent curabitur ultricies.",
  },
  {
    id: 6,
    title: "Project Management",
    icon: "management",
    description:
      "Massa dis morbi sagittis, tellus sit gravida. Id ut non ut in faucibus eu, ac. Tempus feugiat enim id pellentesque a sagittis vitae, convallis. Nunc, arcu enim orci ullamcorper aenean. Scelerisque eget a nibh bibendum commodo.",
  },
];

function ServiceIcon({ type }) {
  const common = {
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  switch (type) {
    case "software":
      return (
        <svg {...common}>
          <rect x="7" y="5" width="34" height="27" rx="2" />
          <path d="M12 25h24M17 32v5m14-5v5M12 37h24" />
          <circle cx="24" cy="18" r="5" />
          <path d="M24 11V9m-6 4-2-2m14 2 2-2m-14 10-3 2m15-2 3 2M24 23v3" />
        </svg>
      );

    case "rocket":
      return (
        <svg {...common}>
          <path d="M27 24C35 18 38 10 37 5c-5-1-13 2-19 10l-5 9 5 5 9-5Z" />
          <circle cx="28" cy="14" r="4" />
          <path d="m18 15-7 1-5 7 10 1m8 0 1 8-7 5-1-10" />
          <path d="M12 30c-4 1-5 5-5 8 4 0 7-1 8-5" />
        </svg>
      );

    case "mobile":
      return (
        <svg {...common}>
          <rect x="12" y="4" width="24" height="40" rx="2" />
          <path d="M17 9h14M17 35h14" />
          <circle cx="24" cy="20" r="8" />
          <circle cx="24" cy="17" r="2.5" />
          <path d="M19.5 25c1-3 8-3 9 0M22 40h4" />
        </svg>
      );

    case "analytics":
      return (
        <svg {...common}>
          <rect x="7" y="7" width="34" height="27" rx="1" />
          <path d="m12 27 8-8 6 5 9-10" />
          <path d="M30 14h5v5M5 38h38l-3-4H8l-3 4Z" />
        </svg>
      );

    case "testing":
      return (
        <svg {...common}>
          <circle cx="29" cy="18" r="13" />
          <circle cx="29" cy="18" r="8" />
          <path d="M23 24 11 36a4 4 0 0 0 6 5l12-12" />
          <path d="m26 13 3 10 4-10M29 23v-5M13 35l4 4" />
        </svg>
      );

    case "management":
      return (
        <svg {...common}>
          <circle cx="24" cy="25" r="16" />
          <circle cx="24" cy="25" r="11" />
          <path d="M24 17v8l5 3M20 4h8m-4 0v5" />
          <path d="m10 11-3-3m31 3 3-3M8 19l-4-1m36 1 4-1" />
          <path d="M24 14v2m0 18v2m-9-11h-2m22 0h-2" />
        </svg>
      );

    default:
      return null;
  }
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9.5" />
      <path d="M8 12h8m-4-4 4 4-4 4" />
    </svg>
  );
}

function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <div className="service-icon">
        <ServiceIcon type={service.icon} />
      </div>

      <div className="service-card-content">
        <h2 className="service-card-title">
          {service.title}

          <a
            className="service-arrow"
            href={`/services/${service.id}`}
            aria-label={`Learn more about ${service.title}`}
          >
            <ArrowIcon />
          </a>
        </h2>

        <p className="service-card-description">
          {service.description}
        </p>
      </div>
    </article>
  );
}

export default function ServicesGrid() {
  return (
    <section className="w-[1296px] ">
      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
