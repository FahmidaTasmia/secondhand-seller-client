import React from 'react';
import Category from '../../Category/Category';
import Banner from '../Banner/Banner';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <Category></Category>
           <Testimonial></Testimonial>
        </div>
    );
};

export default Home;