import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

function ShowFoodDetails(props) {
  const [Food, setFood] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`mongodb+srv://vanessa:vanessa1234@cluster0.td0i9za.mongodb.net/products/${id}`)
      .then((res) => {
        setFood(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowFoodDetails');
      });
  }, [id]);
/*
  const onDeleteClick = (id) => {
    axios
      .delete(`https://world.openfoodfacts.org/api/v0/product/${id}`)
      .then((res) => {
        navigate('/');
      })
      .catch((err) => {
        console.log('Error form ShowFoodDetails_deleteClick');
      });
  };
*/
  const FoodItem = (
    <div>
      <table className='table table-hover table-dark'>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>product_name</td>
            <td>{Food.product_name}</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Barcode</td>
            <td>{Food.code}</td>
          </tr>
          {/* <tr>
            <th scope='row'>3</th>
            <td>Quantity</td>
            <td>{Food.quantity}</td>
          </tr> */}
          <tr>
            <th scope='row'>4</th>
            <td>Brands</td>
            <td>{Food.brands}</td>
          </tr>
          <tr>
            <th scope='row'>6</th>
            <td>Categories</td>
            <td>{Food.categories}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className='ShowFoodDetails'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 m-auto'>
            <br /> <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Food List
            </Link>
          </div>
          <br />
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Food's Record</h1>
            <p className='lead text-center'>View Food's Info</p>
            <hr /> <br />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default ShowFoodDetails;
