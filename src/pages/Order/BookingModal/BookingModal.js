import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const BookingModal = ({booking,setBooking}) => {
    const {title,resealPrice}=booking;
    console.log(booking);
    const {user}=useContext(AuthContext)

    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const phone = form.phone.value;
        const name = form.name.value;
        const email = form.email.value;
        const location = form.location.value;

        const ProductBooking={
            title,
            name,
            email,
            phone,
            resealPrice,
            location
            }

            console.log(ProductBooking);
            setBooking(null)
    }


    return (
       <>

        <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal">
        <div className="modal-box relative">
            <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="text-lg font-bold">{title}</h3>
          <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
       
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name="location" type="text" placeholder="location"  className="input w-full input-bordered" />
                        <input type="text" disabled  value={resealPrice} className="input w-full input-bordered " />
                        <br />
                        <input className='btn btn-primary text-white w-full' type="submit" value="Confirm Booking" />
          </form>
        </div>
        </div>

       </>
    );
};

export default BookingModal;