import React from "react";
import { Redirect } from "react-router-dom";
import {NavLink} from "react-router-dom"


function Home({ isLoggedIn }) {
  if (!isLoggedIn) return <Redirect to="/login" />;

  

  return (
    <div>
        <h1>Sports:</h1>
        <ul>
          <li><NavLink to="/basketball" exact>Basketball</NavLink></li>
          <li><NavLink to="/baseball" exact>Baseball</NavLink></li>
          <li><NavLink to="/football" exact>Football</NavLink></li>
        </ul> 
    </div>
  );
}

export default Home;