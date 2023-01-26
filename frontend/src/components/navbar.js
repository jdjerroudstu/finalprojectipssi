import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = (props) => {
  const [searchQuery, setSearchQuery] = useState('');
//   const { user } = props;

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // make API call or search through existing data
    // this.props.onSearchSubmit(searchQuery);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
      <div className="container">
        <Link className="navbar-brand js-scroll-trigger" to="/">
          <p1> Ratatouille</p1>
        </Link>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarResponsive">
          <form className="form-inline ml-auto my-2 my-lg-0" onSubmit={handleFormSubmit}>
            <input type="text" name="food" className="form-control" placeholder="Rechercher" aria-label="rechercher" maxLength="500" required id="id_food" autoComplete="off" onChange={handleInputChange} value={searchQuery} />
          </form>

          <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/login"> 
                        <img src="https://img.icons8.com/ios-filled/50/null/user-male-circle.png" alt="Login Icon" width="25" height="25" /> 
                  </Link>
                </li>
                <li class="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/Aliments_substitués">
                        <img src="https://img.icons8.com/material-rounded/24/null/shopping-basket-star.png" alt="Login Icon" width="25" height="25"/>
                        {/* <div class="d-lg-none ml-2 d-inline">Mes aliments substitués sauvegardés</div> */}
                </Link>
                </li>
            </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
