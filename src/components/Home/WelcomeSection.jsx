import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import imageUrls from "../../constants/imageUrls";

const WelcomeSection = () => {
  return (
    <div className=" text-center mx-auto w-11/12">
      <h1 className="mt-32 mb-7 mx-auto text-center  text-xl sm:text-5xl font-bold sm:w-2/3 bg-gradient-to-r from-yellow-400 to-pink-600 bg-clip-text text-transparent">
        Welcome to Orange League Your Digital Transformation Partner
      </h1>

      <p className="my-7 mx-auto text-center font-normal text-base sm:w-1/2">
        We're here to help you thrive in the digital landscape. With our
        expertise and dedication, we'll collaborate closely with you to develop
        tailored solutions that drive results.
      </p>

      <PrimaryButton/>
      <img className="my-12 mx-auto sm:w-4/5" src={imageUrls.laptop} alt="laptop" />

    </div>
  );
};

export default WelcomeSection;
