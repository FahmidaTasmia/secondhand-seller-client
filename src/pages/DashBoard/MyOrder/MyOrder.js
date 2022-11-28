import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const MyOrder = () => {
    const {user}= useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                   authorization: `bearer ${localStorage.getItem('accessToken')}` 
                }
            });
            const data = await res.json();
            return data;
           
        }
        
    })
  
    
    return (
      
        <div className="overflow-x-auto w-full my-10  lg:mx-20">
        <table className="table w-full">
  
    <thead>
      <tr>
        <th>
          
        </th>
        <th>Image</th>
        <th>title</th>
        <th>Price</th>
        <th>Payment</th>
        <th></th>
      </tr>
    </thead>
    <tbody>

     {
        bookings?.length>0 &&  bookings?.map((booking, i) => <tr key={booking._id}>
        <th>{i+1}</th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={booking.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>   
          </div>
        </td>
        <td> {booking.title}</td>
        <td>$ {booking.resalePrice}</td>
   
        <td>
          {
           booking.resalePrice && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}><button className='btn btn-primary  btn-sm  text-white '>
           Pay 
          </button></Link>
          }

          {
            booking.price && booking.paid && <span className='text-green-500'>Sold</span>
          }
          </td>
       
        </tr>)
         }
   
     
     
      
      
    </tbody>
    
    
  </table>
</div>
    );
};

export default MyOrder;