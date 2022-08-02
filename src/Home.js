import React from "react";
import { Redirect } from "react-router-dom";

import SportsList from "./SportsList";

function Home({ isLoggedIn }) {
  if (!isLoggedIn) return <Redirect to="/login" />;

  

  return (
    <div>
        <h1>Sports:</h1>
        <SportsList/>
    </div>
  );
}

export default Home;