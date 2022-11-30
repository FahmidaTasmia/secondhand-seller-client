import React from 'react';

const Brand = () => {
    return (
        <div className='p-5  mx-auto rounded-md'>
            <h3 className='text-center text-primary lg:text-3xl text-2xl font-bold '>Recognized and relied upon by the top companies in its field</h3>
            <section className='flex justify-between mt-8 md:p-20'>
                <div>
                    <img className='w-20 h-20' src="https://i.ibb.co/NS5k4FT/apple.png" alt="" />
                </div>
                <div>
                    <img className='w-20 h-20' src="https://i.ibb.co/4pcLS3W/amazon-pay.png" alt="" />
                </div>
                <div>
                    <img className='w-20 h-20' src="https://i.ibb.co/sWyz2M9/slack.png" alt="" />
                </div>

                <div>
                    <img className='w-20 h-20' src="https://i.ibb.co/pxKgLHW/car.png" alt="" />
                </div>

                <div>
                    <img className='w-20 h-20' src="https://i.ibb.co/PWdjqb2/processors.png" alt="" />
                </div>

                <div>
                    <img className='w-20 h-20' src="https://i.ibb.co/k3r8MwR/steering-wheel.png" alt="" />
                </div>

            </section>
            
        </div>
    );
};

export default Brand;