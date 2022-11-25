import React from 'react';
import PrimaryButton from '../../../components/Primarybutton/Primarybutton';

const Banner = () => {
    return (
        <div className="hero  min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/85YPY8N/carbg.jpg")` }}>
  <div className="hero-overlay  bg-opacity-80"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">
        Our customer is our First Priority
       
      </h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className='font-bold' ><PrimaryButton>Get Started</PrimaryButton></button>
    </div>
  </div>
</div> 
    );
};

export default Banner;