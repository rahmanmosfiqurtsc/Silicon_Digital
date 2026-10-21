import React from "react";
import Navbar from "../../components/common/Navbar";
import Container from "../../components/common/Container";
import Button from "../../components/common/Button"

const HeaderSec = () => {
  return (
    <div className="bg-[url('Header.png')] bg-full bg-no-repeat h-[990px]">
      <div>
        <Navbar />
      </div>
      <div>
        <Container>
          <div className="h-122.5 w-159  pt-34">
            <div className="gap-4 flex items-center">
              <a href="#">
                <img src="video-idle.png"></img>
              </a>
              <h3 className="font-extrabold text-[24px] leading-[140%] ">
                Digital Agency Promo
              </h3>
            </div>
            <div>
              <h1 className="font-extrabold text-[72px] leading-[130%] pt-4">
                We{" "}
                <span className="bg-linear-to-r from-[#6366F1] via-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">
                  Transform
                </span>
                <br></br>
                Your Ideas into Reality
              </h1>
            </div>
            <div className="flex gap-10 pt-16">
              <Button varient="solid">
                Work with us
              </Button>
              <p className='text-[16px] leading-[160%] text-[#565973] dark:text-white'>
                Silicon is a leading full-service digital agency based in New
                York. We make mobile apps,websites & brands, that people
                appreciate all around the world.
              </p>
            </div>
            <div className="flex pt-39 gap-4 items-center pb-24">
              <div className="h-11 w-11 rounded-full bg-white items-center p-2.75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.293 9.29297L12 13.586L7.70697 9.29297L6.29297 10.707L12 16.414L17.707 10.707L16.293 9.29297Z"
                    fill="#33354D"
                  />
                </svg>
              </div>
              <a>Discover more</a>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HeaderSec;
