
import { useState } from "react";
import '../../css/Competencies.css';


const competencies = [
  {
    title: "Digital Marketing",
    description:
      "We help businesses reach the right audience through data-driven marketing campaigns, SEO, and social media strategies.",
  },
  {
    title: "Web Development",
    description:
      "Vitae varius euismod egestas egestas lacus. Augue vitae arcu sollicitudin metus iaculis amet, eu at amet. Netus pulvinar tristique ridiculus sed. Viverra ut viverra aenean nisl. Tortor lorem cum congue a. Orci mattis massa tortor magna massa nisi, aliquet risus. Ornare cras aenean pellentesque quam pulvinar at. Libero mollis tortor erat sed. Adipiscing lectus nisi commodo vel. Id augue vitae, hendrerit iaculis.",
  },
  {
    title: "Application Development",
    description:
      "We build modern, scalable applications designed to improve productivity and deliver a seamless user experience.",
  },
  {
    title: "Strategy",
    description:
      "We create effective business strategies that help organizations identify opportunities and achieve sustainable growth.",
  },
  {
    title: "Digital Advertising",
    description:
      "We create targeted advertising campaigns to increase visibility, attract customers, and maximize your return on investment.",
  },
];

function LaptopIllustration() {
  return (
    <div className="competency-illustration" aria-hidden="true">
      <svg
        viewBox="0 0 230 180"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="screen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#514a9a" />
            <stop offset="100%" stopColor="#24204f" />
          </linearGradient>
          <linearGradient id="laptopBase" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f9fafc" />
            <stop offset="100%" stopColor="#cdd0d8" />
          </linearGradient>
        </defs>

        <ellipse
          cx="106"
          cy="145"
          rx="82"
          ry="12"
          fill="#dfe3f2"
          opacity=".65"
        />

        <g transform="rotate(-14 95 95)">
          <rect
            x="28"
            y="51"
            width="127"
            height="88"
            rx="7"
            fill="url(#screen)"
          />
          <path
            d="M28 125 L155 125 L180 153 Q182 158 175 159 L53 159 Q47 159 44 154 Z"
            fill="url(#laptopBase)"
          />

          <g fill="#a6bac5">
            {Array.from({ length: 5 }).map((_, row) =>
              Array.from({ length: 11 }).map((_, col) => (
                <rect
                  key={`${row}-${col}`}
                  x={54 + col * 9}
                  y={132 + row * 4}
                  width="7"
                  height="2.5"
                  rx="1"
                />
              ))
            )}
          </g>

          <path
            d="M104 155 L137 155 L131 158 L109 158 Z"
            fill="#b3bac5"
          />
          <path
            d="M31 92 L48 92"
            stroke="#f4d36b"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M28 101 L58 101"
            stroke="#d88de8"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </g>

        <g transform="translate(133 20) rotate(13)">
          <rect
            x="0"
            y="11"
            width="67"
            height="61"
            rx="8"
            fill="#7c80ef"
          />
          <path d="M0 18 L16 23 L14 0 L4 3 Z" fill="#6967e9" />
          <path d="M48 12 L63 5 L64 29 Z" fill="#9690f4" />
          <path d="M14 65 L26 57 L34 76 L42 59 L52 67 L50 43 L15 40 Z"
            fill="#5e61df"
          />
          <circle cx="34" cy="34" r="18" fill="#d8a1e8" />
          <circle cx="34" cy="34" r="10" fill="#e8cb71" />
          <circle cx="34" cy="34" r="7" fill="#665bd0" />
        </g>
      </svg>
    </div>
  );
}

export default function Competencies() {
  const [openIndex, setOpenIndex] = useState(1);

  const toggleAccordion = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section className="competencies-section">
      <div className="competencies-container">
        <header className="competencies-header">
          <h1>Our Competencies</h1>
          <p>
            We fully understand your business. If you need to update something,
            we are more than happy to help you with the services we are
            providing.
          </p>
        </header>

        <div className="competencies-list">
          {competencies.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                className={`competency-card ${isOpen ? "is-open" : ""}`}
                key={item.title}
              >
                <button
                  className="competency-trigger"
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  aria-controls={`competency-panel-${index}`}
                >
                  <span>{item.title}</span>

                  <span
                    className={`competency-arrow ${isOpen ? "active" : ""}`}
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      fill="none"
                    >
                      <path
                        d={isOpen ? "m7 14 5-5 5 5" : "m7 10 5 5 5-5"}
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div
                    className="competency-content"
                    id={`competency-panel-${index}`}
                  >
                    <LaptopIllustration />
                    <p>{item.description}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
