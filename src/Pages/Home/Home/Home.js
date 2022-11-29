import React from 'react';
import { Link } from 'react-router-dom';
import AllCategories from '../AllCategories/AllCategories';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import HomeCategory from '../HomeCategory/HomeCategory';

const Home = () => {
    return (
        <div>
            <h1>this is home</h1>
            <Banner></Banner>
            {/* <Categories></Categories> */}
            <HomeCategory></HomeCategory>

        </div>
    );
};

export default Home;