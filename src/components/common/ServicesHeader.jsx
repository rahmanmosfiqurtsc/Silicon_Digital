
import React from "react";
import "../../css/ServicesHeader.css";
import Container from './Container';

const ServicesHeader = () => {
  return (
    <Container>
    <div className="py-10">
      <nav className="services-breadcrumb" aria-label="Breadcrumb">
        <a href="/" className="breadcrumb-home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m3 10 9-7 9 7" />
            <path d="M5 9v12h14V9" />
            <path d="M9 21v-8h6v8" />
          </svg>
          <span>Homepage</span>
        </a>

        <svg
          className="text-[#a1a1aa]"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
       
        <span className="breadcrumb-current">
          Services Page
        </span>
      </nav>

      <h1 className="font-extrabold text-[40px] leading-[130%]">Services Page</h1>
    </div>

    </Container>
  );
};

export default ServicesHeader;
