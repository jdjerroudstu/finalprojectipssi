import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const FoodCard = (props) => {
  const Food = props.Food;

  return (
    <div className='card-container'>
        <img src={Food[0].selected_images}
        alt='Foods'
        height={200}
      />
      <div className='desc'>
        <h2>
          <Link to={`/show-Food/${Food._id}`}>{Food.product_name}</Link>
        </h2>
        <h3>{Food.categories}</h3>
        <p>{Food.brands}</p>
      </div>
    </div>
  );
};

export default FoodCard;
