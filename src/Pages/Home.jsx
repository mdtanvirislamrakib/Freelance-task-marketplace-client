import React from 'react';
import HeroSlider from '../Components/HeroSlider';
import PopularCategories from '../Components/PopularCategories';
import FaqSection from '../Components/FaqSection';

const Home = () => {
    return (
        <div>
            <div>
                <HeroSlider></HeroSlider>
            </div>
            <div>
               <PopularCategories></PopularCategories> 
            </div>

            <div>
                <FaqSection></FaqSection>
            </div>
            
        </div>
    );
};

export default Home;