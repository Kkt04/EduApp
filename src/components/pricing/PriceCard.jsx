import React from "react";
import { price } from "../../dummydata";
import { Link } from 'react-router-dom';

const PriceCard = () => {
  if (!price) {
    return <div>No prices available</div>;
  }

  return (
    <>
      {price.map((val) => {
        if (!val) {
          return null;
        }

        return (
          <div className="items shadow">
            <h4>{val.name}</h4>
            <h1>
              <span>Rs.</span>
              {val.price}
            </h1>
            <p>{val.desc}</p>
            {/* <button className="outline-btn">GET STARTED</button> */}
            <Link to ='/payment' className='outline-btn'>GET STARTED</Link>
          </div>
        );
      })}
    </>
  );
};

export default PriceCard;