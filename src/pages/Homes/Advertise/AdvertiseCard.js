import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../components/Primarybutton/Primarybutton';


const AdvertiseCard = ({product}) => {
    const{title,image,description,description1}=product;
    return (
      
     <div>
       <div className="card w-full bg-base-100  mt-16">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl font-semibold ">
    {title}
      <div className="badge badge-primary">NEW</div>
    </h2>
    <p></p>
    <p>{description}</p>
    <p>{description1}</p>
    <div className="card-actions justify-end">
   
      <Link to="/login" className=" animate-bounce">
        <PrimaryButton>Shop Now</PrimaryButton>
      </Link>
    </div>
  </div>
</div>
  </div>

    );
};

export default AdvertiseCard;