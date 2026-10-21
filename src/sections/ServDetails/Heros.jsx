import React from "react";
import Container from "../../components/common/Container";
import Hero from "../../components/other/ServDetails/1.Hero";
import BreadCrum from "../../components/other/ServDetails/BreadCrum";

const Heros = () => {
  return (
    <div>
      <Container>
        <div className="w-[1296px]">
          <div>
            <BreadCrum />
          </div>
          <Hero />
        </div>
      </Container>
    </div>
  );
};

export default Heros;
