import React, { useState } from 'react';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"; 
import './PrimaryButton.css';
const SecondaryButton = ({ onClick, buttonText, buttonIcon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`m-1 text- bg-primary-orange font-almarai font-normal px-4 py-2 text-white rounded-lg`}
    >
      {/* Display "Learn More" text on hover */}
       
        <span className={isHovered ?`mr-2 ease-linear duration-700` : ''}>
          {isHovered ? `Learn More` : ``}
        </span>
      

      {/* Display arrow icon */}
      <span>
        <ArrowForwardIcon style={{ color: "white", width: '1.2rem', height: '1.2rem' }} />
      </span>
    </button>
  );
}

export default SecondaryButton;
