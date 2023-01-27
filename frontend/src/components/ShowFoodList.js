import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FoodCard from './FoodCard';

function ShowFoodList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/getAllProducts')
      .then((res) => {
        setProducts(res.data);
        console.log('everything is okay');
      })
      .catch((err) => {
        console.log('Error from ShowFoodList');
      });
  }, []);

  return (
    <div className='ShowFoodList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Foods List</h2>
          </div>
          <div className='col-md-11'>
          <ul>
            {products.map(product => (
              <li key={product.id}>
                {product.product_name}
              </li>
            ))}
          </ul>
          </div>
        </div>

        {/* <div className='list'>{FoodList}</div> */}
      </div>
    </div>
  );
}

export default ShowFoodList;


