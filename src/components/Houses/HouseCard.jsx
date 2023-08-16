import React from 'react';
import "./HouseCard.css";

const HouseCard = ({ house }) => {
  return (
    <>
        <div className="product">
          <img className="productImage" src={house.image} alt={house.name} />
          <h4><span className='h4HeadingRentAmount'>${house.rent}</span>/month</h4>
          <h3>{house.name}</h3>
          <h6>{house.address}</h6>
          <p>Bedrooms=<span>{house.bedrooms}</span> and Bathrooms=<span>{house.bathrooms}</span></p>
        </div>
    </>
  )
};

export default HouseCard;