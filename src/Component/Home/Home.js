import React from 'react';
import Banner from '../Banner/Banner';
import Dealer from '../Dealer/Dealer';
import PopularCar from '../PopularCar/PopularCar';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularCar></PopularCar>
            <Dealer></Dealer>
        </div>
    );
};

export default Home;