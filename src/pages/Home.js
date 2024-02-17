import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Card from "../components/Card";
import data from "/Users/enzo/Desktop/p6/src/assets/data/data.json";
const Home = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <Banner />
      <div className="card-container">
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
