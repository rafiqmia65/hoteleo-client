import React from 'react';
import Banner from './Banner/Banner';
import Map from './Map/Map';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <WhyChooseUs></WhyChooseUs>
            <Map></Map>
        </div>
    );
};

export default Home;