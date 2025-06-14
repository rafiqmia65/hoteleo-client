import React from "react";
import Banner from "./Banner/Banner";
import Map from "./Map/Map";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import Services from "./Services/Services";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Hoteleo - Home</title>
      </Helmet>
      <Banner></Banner>
      <Services></Services>
      <WhyChooseUs></WhyChooseUs>
      <Map></Map>
    </div>
  );
};

export default Home;
