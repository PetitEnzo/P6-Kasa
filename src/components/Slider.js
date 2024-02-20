import React, { useEffect, useState } from "react";

const Slider = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(intervalId);
  }, [currentIndex, pictures.length]);

  return (
    <div className="Slider-Container">
      {pictures.length > 1 && (
        <p className="Numerotation">
          {currentIndex + 1}/{pictures.length}
        </p>
      )}
      {pictures.length > 1 && (
        <button className="PrevButton" onClick={prevSlide}></button>
      )}
      <img src={pictures[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      {pictures.length > 1 && (
        <button className="NextButton" onClick={nextSlide}></button>
      )}
    </div>
  );
};

export default Slider;
