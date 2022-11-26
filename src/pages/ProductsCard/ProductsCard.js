import React from 'react';

const ProductsCard = ({product}) => {
    const{sellerName,originalPrice,resalePrice,uses,title,description,image}=product;
    return (
        <div className="card bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title font-2xl font-bold">{title}</h2>
    <p>seller Name:{sellerName}</p>
    <p>originalPrice:{originalPrice}</p>
    <p>resealPrice:{resalePrice}</p>
    <p>Uses Time:{uses}</p>
    <p>product Description:{description}</p>
   
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default ProductsCard;