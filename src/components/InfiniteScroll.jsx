import React, { useState } from 'react';

const InfiniteScrollCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = items.length;

  const nextItem = () => {
    setCurrentIndex((currentIndex + 1) % totalItems);
  };

  const prevItem = () => {
    setCurrentIndex((currentIndex - 1 + totalItems) % totalItems);
  };

  return (
    <div className="relative">
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
        onClick={prevItem}
      >
        Prev
      </button>
      <div className="overflow-hidden relative w-full">
        <div className="flex transition-transform duration-300 ease-in-out">
          {items.map((item, index) => (
            <div
              key={index}
              className={`w-full flex-shrink-0 transition-transform duration-300 ease-in-out transform ${
                index === currentIndex ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              {/* Your carousel item component */}
              {item}
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
        onClick={nextItem}
      >
        Next
      </button>
    </div>
  );
};

export default InfiniteScrollCarousel;
