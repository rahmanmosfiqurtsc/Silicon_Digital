
import { useState } from "react";
import "../../css/Testimonials.css";
import clientImage from "../../assets/Testi/image.jpg";

const testimonials = [
  {
    text: "Dolor, a eget elementum, integer nulla volutpat, nunc, sit. Quam iaculis varius mauris magna sem. Egestas sed sed suscipit dolor faucibus dui imperdiet at eget. Tincidunt imperdiet quis hendrerit aliquam feugiat neque cras sed. Dictum quam integer volutpat tellus, faucibus platea. Pulvinar turpis proin faucibus at mauris. Sagittis gravida vitae porta enim, nulla arcu fermentum massa. Tortor ullamcorper lacus. Pellentesque lectus adipiscing aenean volutpat tortor habitant.",
    name: "Ralph Edwards",
    role: "Head of Marketing",
    company: "LOGO",
    rating: 5,
  },
  {
    text: "Working with this team has been an excellent experience. Their attention to detail, creativity, and commitment to quality made the entire process smooth and successful. I would highly recommend their services.",
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "LOGO",
    rating: 5,
  },
  {
    text: "The results exceeded our expectations. The team understood our goals, communicated clearly, and delivered an outstanding experience from beginning to end. We look forward to working together again.",
    name: "Michael Carter",
    role: "Creative Director",
    company: "LOGO",
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(2);

  const testimonial = testimonials[activeIndex - 1];

  const goToPage = (page) => {
    setActiveIndex(page);
  };

  const goPrevious = () => {
    setActiveIndex((current) =>
      current === 1 ? testimonials.length : current - 1
    );
  };

  const goNext = () => {
    setActiveIndex((current) =>
      current === testimonials.length ? 1 : current + 1
    );
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-title">
          What They Say About Us
        </h2>

        <div className="testimonials-layout">
          {/* Left side: testimonial card */}
          <div className="testimonial-left">
            <article className="testimonial-card">
              <div className="quote-badge" aria-hidden="true">
                &ldquo;
              </div>

              <p className="testimonial-text">
                {testimonial.text}
              </p>

              <div
                className="testimonial-stars"
                aria-label={`${testimonial.rating} out of 5 stars`}
              >
                {Array.from(
                  { length: testimonial.rating },
                  (_, index) => (
                    <span key={index} aria-hidden="true">
                      ★
                    </span>
                  )
                )}
              </div>
            </article>

            {/* Pagination */}
            <div className="testimonial-pagination">
              <button
                className="pagination-arrow"
                onClick={goPrevious}
                aria-label="Previous testimonial"
              >
                ‹
              </button>

              <div className="pagination-pages">
                {testimonials.map((item, index) => {
                  const page = index + 1;

                  return (
                    <button
                      key={item.name}
                      className={`pagination-number ${
                        activeIndex === page ? "active" : ""
                      }`}
                      onClick={() => goToPage(page)}
                      aria-label={`Go to testimonial ${page}`}
                      aria-current={
                        activeIndex === page ? "page" : undefined
                      }
                    >
                      {page}
                    </button>
                  );
                })}
              </div>

              <button
                className="pagination-arrow"
                onClick={goNext}
                aria-label="Next testimonial"
              >
                ›
              </button>
            </div>
          </div>

          {/* Right side: client profile */}
          <aside className="testimonial-profile">
            <img
              src={clientImage}
              alt={testimonial.name}
              className="testimonial-avatar"
            />

            <div className="profile-details">
              <div className="company-logo">
                {testimonial.company}
              </div>

              <div className="profile-divider" />

              <div className="profile-info">
                <h3>{testimonial.name}</h3>
                <p>{testimonial.role}</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
