import React from "react";
import CustomTitle from "../SectionTitle";
import imageUrls from "../../constants/imageUrls";
import ExpertiseCard from "./ExpertiseCard";
const OurExpertise = () => {
  return (
    <div className="w-11/12 mx-auto flex flex-col justify-center my-2">
      <CustomTitle title={"Our Expertise"} />

      <p className="mt-4 mx-auto text-center text-5xl font-bold sm:w-2/3">
        Our Dynamic Suite of Services Engineered for Innovation
      </p>

      <div className="mt-14 grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        <ExpertiseCard
          title={`User Experience Design`}
          description={`Crafting seamless digital experiences tailored to your users' needs,
            ensuring intuitive navigation and captivating interfaces that drive
            engagement and satisfaction.`}
          imageUrl={imageUrls.ux} 
        />
        <ExpertiseCard
          title={`Front-end Development`}
          description={`Transforming designs into responsive, pixel-perfect websites and applications with cutting-edge front-end technologies, ensuring optimal performance and user interaction.`}
          imageUrl={imageUrls.frontend}
        />
        <ExpertiseCard
          title={`Backend Development`}
          description={`Empowering your digital infrastructure with robust backend solutions, ensuring scalability, security, and seamless integration to support your application's functionality and performance.`}
          imageUrl={imageUrls.backend}
        />
        <ExpertiseCard
          title={`Mobile Development`}
          description={`Building native and cross-platform mobile applications that deliver exceptional user experiences, leveraging the latest technologies to meet your business objectives.`}
          imageUrl={imageUrls.mobile}
        />
        <ExpertiseCard
          title={`QA Testing`}
          description={`Ensuring your digital products meet quality standards through rigorous testing, guaranteeing functionality, reliability, and user satisfaction for optimal performance.`}
          imageUrl={imageUrls.qa}
        />
        <ExpertiseCard
          title={`Deployment`}
          description={`Streamlining the deployment process to seamlessly launch your digital solutions, ensuring smooth transitions and efficient implementation for maximum impact.`}
          imageUrl={imageUrls.deployment}
        />
      </div>
    </div>
  );
};

export default OurExpertise;
