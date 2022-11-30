import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertiseCard from './AdvertiseCard';

const Advertise = () => {

    const{data:products=[]}=useQuery({
        queryKey:['products'],
        queryFn:()=>fetch('https://secondhand-seller-server.vercel.app/advertise')
        .then(res=>res.json())
    })
    return (
        <div className=''>
            
                {
                    products.map(product=> <AdvertiseCard
                    key={product._id}
                    product={product}
                    >

                    </AdvertiseCard>)
                }
            
        </div>
    );
};

export default Advertise;