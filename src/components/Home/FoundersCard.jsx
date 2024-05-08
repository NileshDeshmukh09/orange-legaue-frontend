import React from "react";

const FounderCard = ({ imageUrl, name, position, experience }) => {
  return (
    <div className="shadow-md rounded-3xl">
      <img src={imageUrl} alt={name}  />
      <div className="p-6 flex flex-col gap-y-2">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="text-base text-accent-purple font-normal">{position}</p>
        <p className="text-base font-normal">{experience}</p>
      </div>
    </div>
  );
};

export default FounderCard;
