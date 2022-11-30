import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Testimonial.css";

// import required modules
import { Pagination } from "swiper";

const Testimonial = () => {
    return (
       <div className='my-8 p-12 shadow-sm'>

            <div className='text-center '>
                <h3 className='text-primary text-2xl font-bold'>What Our Customers are SAying</h3>
                <h3 className=' text-lg '>Read The Valuable Words</h3>
            </div>

        <>
            
            <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 text-justify  shadow-2xl my-12 ">
              <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                <div className="avatar online">
                    <div className="w-16 rounded-full">
                        <img src="https://placeimg.com/192/192/people" />
                    </div>
                    </div>
                  <div>
                    <h4 className="font-bold">Alien York</h4>
                    <span className="text-xs dark:text-gray-400">
                      2 days ago
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 dark:text-yellow-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                  </svg>
                  <span className="text-xl font-bold">4.5</span>
                </div>
              </div>
              <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                <p>
                  My Experience with Cmart is Wonder full and 
                  their customer service is next level. Thanks for the great service. I love Cmart. I have gotten at least 50 times the value from Cmart. I don't always clop, but when I do, it's because of Cmart.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 text-justify  shadow-2xl my-12">
              <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                <div className="avatar online">
                    <div className="w-16 rounded-full">
                        <img src="https://placeimg.com/192/192/people" />
                    </div>
                    </div>
                  <div>
                    <h4 className="font-bold">Alien York</h4>
                    <span className="text-xs dark:text-gray-400">
                      2 days ago
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 dark:text-yellow-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                  </svg>
                  <span className="text-xl font-bold">4.5</span>
                </div>
              </div>
              <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                <p>
                  My Experience with Cmart is Wonder full and 
                  their customer service is next level. Thanks for the great service. I love Cmart. I have gotten at least 50 times the value from Cmart. I don't always clop, but when I do, it's because of Cmart.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 text-justify  shadow-2xl my-12">
              <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                <div className="avatar online">
                    <div className="w-16 rounded-full">
                        <img src="https://placeimg.com/192/192/people" />
                    </div>
                    </div>
                  <div>
                    <h4 className="font-bold">Alien York</h4>
                    <span className="text-xs dark:text-gray-400">
                      2 days ago
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 dark:text-yellow-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                  </svg>
                  <span className="text-xl font-bold">4.5</span>
                </div>
              </div>
              <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                <p>
                  My Experience with Cmart is Wonder full and 
                  their customer service is next level. Thanks for the great service. I love Cmart. I have gotten at least 50 times the value from Cmart. I don't always clop, but when I do, it's because of Cmart.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 text-justify  shadow-2xl my-12">
              <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                <div className="avatar online">
                    <div className="w-16 rounded-full">
                        <img src="https://placeimg.com/192/192/people" />
                    </div>
                    </div>
                  <div>
                    <h4 className="font-bold">Alien York</h4>
                    <span className="text-xs dark:text-gray-400">
                      2 days ago
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 dark:text-yellow-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                  </svg>
                  <span className="text-xl font-bold">4.5</span>
                </div>
              </div>
              <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                <p>
                  My Experience with Cmart is Wonder full and 
                  their customer service is next level. Thanks for the great service. I love Cmart. I have gotten at least 50 times the value from Cmart. I don't always clop, but when I do, it's because of Cmart.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 text-justify  shadow-2xl my-12">
              <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                <div className="avatar online">
                    <div className="w-16 rounded-full">
                        <img src="https://placeimg.com/192/192/people" />
                    </div>
                    </div>
                  <div>
                    <h4 className="font-bold">Alien York</h4>
                    <span className="text-xs dark:text-gray-400">
                      2 days ago
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 dark:text-yellow-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                  </svg>
                  <span className="text-xl font-bold">4.5</span>
                </div>
              </div>
              <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                <p>
                  My Experience with Cmart is Wonder full and 
                  their customer service is next level. Thanks for the great service. I love Cmart. I have gotten at least 50 times the value from Cmart. I don't always clop, but when I do, it's because of Cmart.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 text-justify  shadow-2xl my-12">
              <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                <div className="avatar online">
                    <div className="w-16 rounded-full">
                        <img src="https://placeimg.com/192/192/people" />
                    </div>
                    </div>
                  <div>
                    <h4 className="font-bold">Alien York</h4>
                    <span className="text-xs dark:text-gray-400">
                      2 days ago
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 dark:text-yellow-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                  </svg>
                  <span className="text-xl font-bold">4.5</span>
                </div>
              </div>
              <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                <p>
                  My Experience with Cmart is Wonder full and 
                  their customer service is next level. Thanks for the great service. I love Cmart. I have gotten at least 50 times the value from Cmart. I don't always clop, but when I do, it's because of Cmart.
                </p>
              </div>
            </div>
          </SwiperSlide>
       
      </Swiper>

        </>
       </div>
    );
};

export default Testimonial;