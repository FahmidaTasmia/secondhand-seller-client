import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
const ErrorPage = () => {
    const container =useRef(null);
    useEffect(()=>{
        const instance = Lottie.loadAnimation({
            container:container.current,
            renderer:'svg',
          
            autoplay:true,
            animationData:require('./404Error.json')
        })
        return () => instance.destroy();
     
    },[])
    return (
        <div>
                <div className='container w-75 h-75' ref={container}></div>
        </div>
    );
};

export default ErrorPage;