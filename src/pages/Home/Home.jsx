import React from 'react';
import Banner from './Banner/Banner';
import Map from './Map/Map';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WhyChooseUs></WhyChooseUs>
            <Map></Map>
        </div>
    );
};

export default Home;