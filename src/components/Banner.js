import React from "react";

const Banner = ({ bannerClass }) => {
  return (
    <div className={`accueilBanner ${bannerClass}`}>
      <h3 className="animate__animated animate__fadeInLeft">
        Chez vous, partout et ailleurs
      </h3>
    </div>
  );
};

export default Banner;
