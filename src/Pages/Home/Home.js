import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Faq from '../Faq/Faq';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <AboutUs></AboutUs>
            <Faq></Faq>
        </div>
    );
};

export default Home;