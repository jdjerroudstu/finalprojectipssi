import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/userDetails";
import Home from "./components/Home";
import Background from './components/background'; 
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
            </Routes>
          </div>
        </div>
      </div>
    </Router>
    </Background>
  );
}

export default App;
