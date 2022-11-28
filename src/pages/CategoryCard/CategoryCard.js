import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../components/Primarybutton/Primarybutton';

const CategoryCard = ({category}) => {
    const{name,image,_id}=category;
    // console.log(category);
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
 <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body grid justify-items-center">
    <h2 className="card-title text-3xl font-bold text-primary ">{name}</h2>
   
      <Link to={`/category/${_id}`}><PrimaryButton>Buy Now </PrimaryButton></Link>
    </div>
  </div>

    );
};

export default CategoryCard;