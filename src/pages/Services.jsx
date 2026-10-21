import React from "react";
import TopHeader from "../sections/Services/TopHeader";
import Serv from "../sections/Services/Serv";
import TestiServ from '../sections/Services/TestiServ';
import Choice from "../sections/Services/Choice";
import ContactSection from "../sections/Services/ContactSection";
import Footer from '../components/common/Footer'

const Services = () => {
  return (
    <div>
      <TopHeader />
      <Serv />
      <TestiServ />
      <Choice />
      <ContactSection />
      <Footer/>
    </div>
  );
};

export default Services;
