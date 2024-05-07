import React from "react";
import imageUrls from "../constants/imageUrls";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="absolute bottom-0 h-[20rem] bg-accent-black w-full">
      <div className="w-11/12 mt-12 text-accent-white mx-auto">
        <div className="flex justify-between">
          <div>Logo-socialmedia url

            <div className="flex gap-x-4 mt-5"> 
                <Link><img src={imageUrls.linkedin}/></Link>
                <Link><img src={imageUrls.twitter}/></Link>
                <Link><img src={imageUrls.discord}/></Link>
                <Link><img src={imageUrls.instagram}/></Link>
            </div>
          </div>

          <div className="flex w-1/2 justify-between">
            <FooterSection title="Product">
              <p>Features</p>
              <p>Integrations</p>
              <p>Changelog</p>
              <p>RoadMap</p>
            </FooterSection>

            <FooterSection title="Company">
              <p>Our team</p>
              <p>Our values</p>
              <p>Blog</p>
            </FooterSection>

            <FooterSection title="Resources">
              <p>Downloads</p>
              <p>Documentation</p> 
              <p>Contacts</p>
            </FooterSection>
          </div>
        </div>
        <div className="absolute mx-auto flex py-2 font-almarai w-11/12 justify-between bottom-0 border-t border-accent-white">
          <div className="flex">
            <p className="mr-10">Privacy Policy</p>
            <p>Terms of Conditions</p>
          </div>

          <p>Reflect App, LLC. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

const FooterSection = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="text-primary-orange font-bold">{title}</h1>
      {children}
    </div>
  );
};

export default Footer;
