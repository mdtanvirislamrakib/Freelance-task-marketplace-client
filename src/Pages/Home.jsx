import React from 'react';
import HeroSlider from '../Components/HeroSlider';
import PopularCategories from '../Components/PopularCategories';
import FaqSection from '../Components/FaqSection';
import FeaturedTask from '../Components/FeaturedTask';
import { useLoaderData } from 'react-router';

const Home = () => {
    const featuredTaskData = useLoaderData();
    console.log(featuredTaskData);


    return (
        <div>
            <div>
                <HeroSlider></HeroSlider>
            </div>
            <div>
                
                <FeaturedTask featuredTaskData = {featuredTaskData}></FeaturedTask>
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