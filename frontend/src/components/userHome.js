import React, { Component, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
export default function UserHome({ userData }) {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };
  return (
    <div>
      <h1>{userData.fname}</h1>
      <h1>{userData.email}</h1>
      <br />
      <button onClick={logOut} className="btn btn-primary">
        Log Out
      </button>
      <br />
      <Link to="../">
        <button className="btn btn-primary">Go to the home page</button>
      </Link>
    </div>
  );
}