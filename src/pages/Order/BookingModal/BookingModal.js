import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const BookingModal = ({booking,setBooking,refetch}) => {
    const {title,resalePrice,image}=booking;
    console.log(booking);
    const {user}=useContext(AuthContext)

    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const phone = form.phone.value;
        const name = form.name.value;
        const email = form.email.value;
        const location = form.location.value;

        const booking={
            title,
            name,
            email,
            phone,
            image,
            resalePrice,
            location
            }
            fetch('https://secondhand-seller-server.vercel.app/bookings', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(booking)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.acknowledged) {
                        setBooking(null);
                        toast.success('Booking confirmed');
                        refetch();
                    }
                    else{
                        toast.error(data.message);
                    }
                })
    }


    return (
       <>

        <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal">
        <div className="modal-box relative">
            <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="text-lg font-bold">{title}</h3>
            
          <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                         <input type="image" className='w-40 h-40' src={image} alt="" />
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
       
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name="location" type="text" placeholder="location"  className="input w-full input-bordered" />
                        <input type="text" disabled value={`resealPrice:${resalePrice}`} className="input w-full input-bordered " />
                       
                        <br />
                        <input className='btn btn-primary text-white w-full' type="submit" value="Confirm Booking" />
          </form>
        </div>
        </div>

       </>
    );
};

export default BookingModal;