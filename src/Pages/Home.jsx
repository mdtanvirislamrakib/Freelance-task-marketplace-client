import React from 'react';
import HeroSlider from '../Components/HeroSlider';
import PopularCategories from '../Components/PopularCategories';
import FaqSection from '../Components/FaqSection';
import FeaturedTask from '../Components/FeaturedTask';
import { useLoaderData } from 'react-router';
import HowItWorksSection from '../Components/HowItWorksSection';
import SuccessStoriesSection from '../Components/SuccessStoriesSection';

const Home = () => {
    const featuredTaskData = useLoaderData();


    return (
        <div>
            <div>
                <HeroSlider></HeroSlider>
            </div>
            <div>
                <HowItWorksSection></HowItWorksSection>
            </div>
            <div>
                
                <FeaturedTask featuredTaskData = {featuredTaskData}></FeaturedTask>
            </div>
            <div>
               <PopularCategories></PopularCategories> 
            </div>
            <div>
                <SuccessStoriesSection></SuccessStoriesSection>
            </div>

            <div>
                <FaqSection></FaqSection>
            </div>
            
        </div>
    );
};

export default Home;