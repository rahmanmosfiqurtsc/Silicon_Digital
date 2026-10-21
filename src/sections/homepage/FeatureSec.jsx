import React from "react";
import Container from "../../components/common/container";
import TitleCent from "../../components/common/TitleCent";
import Imgg from "../../assets/Feature/project.jpg";
import Imgg1 from "../../assets/Feature/project-1.jpg";
import Imgg2 from "../../assets/Feature/project-2.jpg";
import Imgg3 from "../../assets/Feature/project-3.jpg";
import Button from "../../components/common/Button";

const FeatureSec = () => {
  return (
    <div className="mx-auto">
      <Container>
        <TitleCent
          text="Featured Projects"
          para="We create websites and mobile apps, marketing materials, branding, web design, UX/UI design and illustrations."
        ></TitleCent>
        <div className="flex gap-6 w-[1296px]">
          
            <img src={Imgg} alt="" className="w-104 h-214"></img>
        
          <div className="pl-6 w-[856px]">
            <div className=" flex gap-6 pb-6">
              <img src={Imgg1} alt="" className="w-[856px] h-[416px]"></img>
              <img src={Imgg2} alt="" className=" w-[856px] h-[416px]"></img>
            </div>
            <div>
              <img src={Imgg3} alt="" className="w-[856px] h-[416px]"></img>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-[1296px] pt-[53px]">

        <Button varient="solid" Tagname="a" href="#">Explore all</Button> 
        </div>
      </Container>
    </div>
  );
};

export default FeatureSec;
