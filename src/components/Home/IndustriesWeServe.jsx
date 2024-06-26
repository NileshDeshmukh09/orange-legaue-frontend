import React from "react";
import SectionTitle from "../SectionTitle";
import PrimaryButton from "../Buttons/PrimaryButton";

const IndustriesWeServe = () => {
  return (
    <div className="mx-auto w-11/12 mt-36 ">
      <SectionTitle title={"Industries We Serve"} />

      <div className="flex flex-col sm:flex-row mt-10 sm:justify-between">
        <div className="sm:w-1/2  h-96 shadow-xl rounded-3xl"></div>

        <div className="sm:w-1/2 my-12 pl-6">
          <h2 className="mb-6 text-2xl font-bold text-accent-black">
            Tailored Solutions, Addressing the Unique Needs of Every Industry
          </h2>

          <p className="mb-6 text-base font-normal text-accent-black">
            We are aware of the particular difficulties faced by every sector.
            Become one of the many business titans who rely on us to provide
            outstanding digital solutions. For this reason, we provide
            customized solutions based on the demands of your industry. Whether
            you are in finance, retail, or manufacturing, we have you covered.
          </p>

          <PrimaryButton/>
        </div>
      </div>
    </div>
  );
};

export default IndustriesWeServe;
