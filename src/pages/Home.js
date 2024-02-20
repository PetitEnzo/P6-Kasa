import React from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import data from "../assets/data/data.json";
const Home = () => {
  return (
    <div>
      <Banner bannerClass="page1Banner" />
      <div className="card-container">
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
