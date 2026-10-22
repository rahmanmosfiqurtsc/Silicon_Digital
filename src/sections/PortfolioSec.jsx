import React from "react";
import { useState } from "react";
import Container from "../components/common/Container";
import Breadcrumb from "../components/portfolio/Breadcrumb";
import CategoryFilter from "../components/portfolio/CategoryFilter";
import PortfolioHeader from "../components/portfolio/PortfolioHeader";
import ProjectGrid from "../components/portfolio/ProjectGrid";
import Pagination from "../components/portfolio/Pagination";
import CTASection from "../components/portfolio/CTASection";

const PortfolioSec = () => {
  const [activeCategory, setActiveCategory] = useState("All Works");
  const [page, setPage] = useState(1);

  return (
    <div>
      <Container>
        <div className="w-[1296px]">
          <Breadcrumb />
          <PortfolioHeader
            activeCategory={activeCategory}
            onChange={(category) => {
              setActiveCategory(category);
              setPage(1);
            }}
          />
          <ProjectGrid activeCategory={activeCategory} page={page} />
          <Pagination page={page} onChange={setPage} />
          <CTASection />
        </div>
      </Container>
    </div>
  );
};

export default PortfolioSec;
