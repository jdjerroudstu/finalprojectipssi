import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
  return (
    <footer className="bg-light footer py-3">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-auto text-center">
            <Link to="/">Mentions Légales</Link>
          </div>
          <div className="col-auto text-center">
            <a href='https://fr.openfoodfacts.org/' >Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;