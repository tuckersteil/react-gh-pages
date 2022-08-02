import React from "react";
import { NavLink, useHistory } from "react-router-dom";

const linkStyles = {
    width: "100px",
    padding: "12px",
    margin: "0 20px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };

function Navbar({ setIsLoggedIn }) {
    const history = useHistory();

    function handleLogout() {
        setIsLoggedIn(false);
        history.push("/login");
      }

    return (
        <div>
            <NavLink
                to="/"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "darkblue",
                }}
            >
            Home
            </NavLink>
            <NavLink
                to="/pending"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "darkblue",
                }}
            >
            Pending
            </NavLink>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
  }

  export default Navbar;