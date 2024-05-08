import React from "react";

const CarouselItem = () => {
  return (
    <div className="rounded-3xl flex font-almarai border p-8 w-[25.4rem] flex-col gap-y-4">
      <h1 className="text-xl text-primary-orange font-bold">Excellent Team... The best</h1>

      <p className="font-almarai text-sm text-accent-black font-normal">
        Outstanding service! Their team demonstrated exceptional expertise and
        professionalism throughout our project. The end result exceeded our
        expectations, delivering a seamless and innovative solution. Highly
        recommend their services for anyone seeking top-notch digital
        development.
      </p>

      <div className="flex gap-x-4">
        <div className="rounded-[10px] bg-blue-500 w-12 h-12">
        </div>
        <div className="font-normal">
          <h1 className="text-base">Akshay Biswas</h1>
          <p className="text-xs">Founder & Ceo, Wipro</p>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
