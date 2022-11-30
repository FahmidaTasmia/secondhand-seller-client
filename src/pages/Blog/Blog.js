import Lottie from 'lottie-web';
import React, { useEffect, useRef } from 'react';

const Blog = () => {

    const container =useRef(null)
    useEffect(()=>{
        const instance = Lottie.loadAnimation({
            container:container.current,
            renderer:'svg',
          
            autoplay:true,
            animationData:require('./car.json')
        })
        return () => instance.destroy();
     
    },[])
    return (
        <div className='grid md:grid-cols-2'>
        <div className=' mx-auto self-center'>
      <h1 className="text-5xl font-bold "> <span className='text-primary'>Cmart</span> needs to meet their Audience  where they are</h1>
      <p className="py-6">Not all hybrid vehicles still qualify for the onetime $7,500 federal tax credit

. However, with the purchase of a Chrysler Pacifica Hybrid, you may be eligible

. This nonrefundable credit doesn’t carry over year-to-year, so make sure you take advantage while you can. You can receive a portion of the $7,500 tax credit

 even if your tax liability is below $7,500

.</p>

      
    </div>
      
        <div className='container w-75 h-75' ref={container}></div>
    </div>
    );
};

export default Blog;