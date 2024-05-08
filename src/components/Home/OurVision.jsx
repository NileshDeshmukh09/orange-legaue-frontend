import React from "react";
import imageUrls from "../../constants/imageUrls";
import SectionTitle from "../SectionTitle";
import IndustriesWeServe from "./IndustriesWeServe";

const OurVision = () => {
  return (
    <div className="relative mt-36 w-full">
      <img
        src={imageUrls.vision}
        alt="vision"
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0  flex flex-col justify-center items-center">
        <SectionTitle title={`Our Vision`} />

        <h1 className="my-4  mx-auto text-center  text-xl sm:text-5xl font-bold sm:w-2/3 bg-gradient-to-r from-yellow-400 to-pink-600 bg-clip-text text-transparent">
          Welcome to Orange League Your Digital Transformation Partner
        </h1>

        <p className=" mx-auto text-center font-normal text-accent-white text-base sm:w-1/2">
          At the forefront of innovation, we envision developing products that
          redefine industries, enrich lives, and inspire lasting change, fueled
          by creativity, expertise, and a relentless pursuit of excellence.
        </p>
      </div>

      {/* <IndustriesWeServe/> */}
    </div>
  );
};

export default OurVision;
