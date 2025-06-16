import React from "react";
import Banner from "./Banner/Banner";
import Map from "./Map/Map";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import Services from "./Services/Services";
import { Helmet } from "react-helmet";
import TopRated from "./TopRated/TopRated";
import ReviewsSection from "./ReviewsSection/ReviewsSection";
import SpecialOfferPopup from "./SpecialOfferPopup/SpecialOfferPopup";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Hoteleo - Home</title>
      </Helmet>
      <SpecialOfferPopup></SpecialOfferPopup>
      <Banner></Banner>
      <TopRated></TopRated>
      <Services></Services>
      <WhyChooseUs></WhyChooseUs>
      <ReviewsSection></ReviewsSection>
      <Map></Map>
    </div>
  );
};

export default Home;
