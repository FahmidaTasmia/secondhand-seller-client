import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../../components/Loading/Loading';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
// console.log("key:",stripePromise);
const Payment = () => {
    const booking = useLoaderData();
   
    const navigation = useNavigation();
  
    if(navigation.state === "loading"){
        return <Loading></Loading>
    }
    return (
        <div>
            <h3 className='text-lg'>Payment for <span className='text-primary font-bold text-2xl'>{booking.title}</span></h3>
            <p>Please Pay <span className='text-primary font-bold text-lg'>${booking.resalePrice}</span> For your purchasing product</p>

            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;