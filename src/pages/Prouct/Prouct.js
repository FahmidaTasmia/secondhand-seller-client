import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductsCard from '../ProductsCard/ProductsCard';

const Prouct = () => {
    const allProducts = useLoaderData();
    console.log(allProducts);
    return (
        <div className='grid md:grid-cols-2 gap-8 '>
         
         {
                allProducts.map(product=><ProductsCard
                key={product._id}
                product={product}
                ></ProductsCard>)
           }



        </div>
        
    );
};

export default Prouct;