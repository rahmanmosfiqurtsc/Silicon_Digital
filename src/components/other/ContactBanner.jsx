
import { useState } from "react";
import "../../css/ContactBanner.css";

export default function ContactBanner() {
  const [emailCopied, setEmailCopied] = useState(false);

  const email = "example@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-banner">
        <div className="contact-decoration" aria-hidden="true">
          <svg
            viewBox="0 0 1000 320"
            preserveAspectRatio="none"
            className="contact-lines"
          >
            <path d="M35 -40 L105 75 Q130 110 95 140 L-20 205" />
            <path d="M75 -40 L145 75 Q170 110 135 140 L-20 230" />
            <path d="M115 -40 L185 75 Q210 110 175 140 L-20 255" />
            <path d="M155 -40 L225 75 Q250 110 215 140 L-20 280" />
            <path d="M195 -40 L265 75 Q290 110 255 140 L-20 305" />
          </svg>
        </div>

        <div className="contact-rays" aria-hidden="true" />

        <div className="contact-content">
          <p className="contact-subtitle">
            Want to work with us? Let’s talk
          </p>

          <button
            type="button"
            className="contact-email"
            onClick={copyEmail}
            aria-label="Copy contact email address"
          >
            {email}
          </button>

          <span className="contact-copy-status" aria-live="polite">
            {emailCopied ? "Email copied!" : ""}
          </span>

          <a
            className="contact-button"
            href={`mailto:${email}`}
          >
            Contact us
          </a>
        </div>
      </div>
    </section>
  );
}
