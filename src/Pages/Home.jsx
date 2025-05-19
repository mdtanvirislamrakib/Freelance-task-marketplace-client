import React from 'react';
import HeroSlider from '../Components/HeroSlider';
import PopularCategories from '../Components/PopularCategories';

const Home = () => {
    return (
        <div>
            <div>
                <HeroSlider></HeroSlider>
            </div>
            <PopularCategories></PopularCategories>
        </div>
    );
};

export default Home;