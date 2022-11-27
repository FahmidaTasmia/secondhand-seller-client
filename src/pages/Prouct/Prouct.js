import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../Order/BookingModal/BookingModal';
import ProductsCard from '../ProductsCard/ProductsCard';

const Prouct = () => {
    const allProducts = useLoaderData();
   const[booking,setBooking]=useState(null);
  
    return (
       <div>
         <div className='grid md:grid-cols-2 gap-8 '>
         
         {
                allProducts.map(product=><ProductsCard
                key={product._id}
                product={product}
                setBooking={setBooking}
                ></ProductsCard>)
           }



        </div>

      {
        booking &&
        <BookingModal
        booking={booking}
        setBooking={setBooking}
        ></BookingModal>
      }
       </div>
        
    );
};

export default Prouct;