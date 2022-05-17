import React from 'react';
import Banner from '../Banner/Banner';

import Services from '../FeaturesItem/FeaturesItem';
import LatestPhone from '../LatestPhone/LatestPhone';

const Home = () => {
    return (
        <div>
          
            <Banner></Banner> 
            <Services></Services> 
            <LatestPhone></LatestPhone>
        </div>
    );
};

export default Home;