import React from 'react';
import PrimaryButton from '../../../components/Primarybutton/Primarybutton';


const AboutUs= () => {
    return (
        <div className="hero my-20">
  <div className="grid md:grid-cols-2 gap-5">
   
    <div className='mx-10'>
     <p className='text-2xl font-bold text-primary'>About Cmart</p>
     <h1 className="my-5 text-5xl font-bold">
     We Dedicate Ourselves <br />
                       
     to Finding the Right <br /> Vehicle for You</h1>
        <p className="py-6 text-justify"> <span className='text-primary text-2xl font-semibold'>Cmart</span> Proudly Serves Drivers from New York, Brooklyn, Bronx and Manhattan. We Invite You to Find Your Best Automotive Match from our Inventory of New and Used Volvo Models. </p>
        <p className="py-6 text-justify">We always say our services Manhattan that the only thing better than inspecting and experiencing that new car smell on a new  to test it out on the road. </p>
        <button ><PrimaryButton>Know more</PrimaryButton></button>
    </div>

    <div className='relative '>
   <img src="https://i.ibb.co/j5W1nK7/6852136-28531.jpg" alt="" className='w-4/5 h-full rounded-lg shadow-2xl' />
    <img src="https://i.ibb.co/ssP3J1m/13841402-2010-i123-005-car-headlights-AD-composition.jpg" alt=""  className='absolute right-5 top-1/2 w-3/5 border-8 border-black rounded-lg'/>
   </div>
  </div>
</div>
    );
};

export default AboutUs;