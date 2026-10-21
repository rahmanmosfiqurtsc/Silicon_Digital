import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <div>
      <Container>
        <div className="w-[1296px]  ">
          <div className=" flex pt-18">
            <div className="max-w-[416px]">
              <div className="pb-[24px]">
                <img src="solid.png"></img>
              </div>
              <p>
                Proin ipsum pharetra, senectus eget scelerisque varius pretium
                platea velit. Lacus, eget eu vitae nullam proin turpis etiam mi
                sit. Non feugiat feugiat egestas nulla nec. Arcu tempus, eget
                elementum dolor ullamcorper sodales ultrices eros.{" "}
              </p>
              <form>
                <fieldset className="w-80">
                  <label>Subscribe to our newsletter</label>
                  <div className="join">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="input join-item"
                    />
                    <button className="btn btn-primary join-item">
                      Subscribe
                    </button>
                  </div>
                </fieldset>
              </form>
              <p className="pt-[72px]">
                2021. All rights reserved. Silicon Template
              </p>
            </div>
           <div className="flex pl-[244px]">
             <div className="pr-[153px]">
              <ul>
                <li>
                  <a className="link link-hover">Home</a>
                </li>
                <li>
                  <a className="link link-hover">About</a>
                </li>
                <li>
                  <a className="link link-hover">Portfolio</a>
                </li>
                <li>
                  <a className="link link-hover">Blog</a>
                </li>
                <li className="pt-10">
                  <a className="link link-hover">Terms & Conditions</a>
                </li>
                <li>
                  <a className="link link-hover">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="pr-[136px]">
              <ul>
                <li>
                  <a className="link link-hover">Facebook</a>
                </li>
                <li>
                  <a className="link link-hover">Linkedin</a>
                </li>
                <li>
                  <a className="link link-hover">Twitter</a>
                </li>
                <li>
                  <a className="link link-hover">Instragram</a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <a className="link link-hover">Contact Us</a>
                </li>
                <li>
                  <a className="link link-hover text-[#6366F1]">
                    example@gmail.com
                  </a>
                </li>
              </ul>
            </div>
           </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
