// import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/userDetails";
import Home from "./components/Home";
import AfficheSub from "./components/affiche_sub";
import Background from './components/background'; 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShowFoodList from "./components/showFoodList";

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <Background>
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route
                exact
                path="/login"
                element={isLoggedIn == "true" ? <UserDetails /> : <Login />}
              />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/userDetails" element={<UserDetails />} />
              <Route path="/" element={<Home />} />
              <Route path="/show-food" element={<ShowFoodList />} />
              <Route path="/afficheSub" element={<AfficheSub />} />
              
            </Routes>
          </div>
        </div>
      </div>
    </Router>
    </Background>
  );
}



// // function ProductList() {
//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//     axios.get('http://localhost:8000/getAllProducts')
//       .then(res => setProducts(res.data));
//   }, []);
//   console.log(products)

//   return (
//     <div>
//       <h2>Liste des produits</h2>
//       <ul>
//         {products.map(product => (
//           <li key={product.id}>
//             {product.product_name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// // export default ProductList;


export default App;
