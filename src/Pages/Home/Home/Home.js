import React from 'react';
import Banner from '../Banner/Banner';
import HomeCategory from '../HomeCategory/HomeCategory';
import NewSection from '../NewSection/NewSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <Categories></Categories> */}
            <HomeCategory></HomeCategory>
            <NewSection></NewSection>

        </div>
    );
};

export default Home;