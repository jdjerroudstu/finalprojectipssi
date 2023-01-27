import React, { Component } from 'react';
import Navbar from './navbar';
import Footer from './Footer';
import Homee from './homee';
class Home extends Component {
  render() {
    return (
        <div>
            <div>
                <Navbar />
                <Homee />
                {/* <Footer/> */}
                   
            </div>
        </div>
    );
  }
}

export default Home;