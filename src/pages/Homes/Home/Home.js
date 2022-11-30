import React from 'react';
import Category from '../../Category/Category';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Brand from '../Brand/Brand';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <Category></Category>
           <AboutUs></AboutUs>
           <Testimonial></Testimonial>
           <Brand></Brand>
        </div>
    );
};

export default Home;