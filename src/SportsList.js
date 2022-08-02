import React from "react";
import {NavLink} from "react-router-dom"

function SportsList(){
    return (
    <ul>
        <li><NavLink to="/basketball" exact>Basketball</NavLink></li>
        <li><NavLink to="/baseball" exact>Baseball</NavLink></li>
        <li><NavLink to="/football" exact>Football</NavLink></li>
    </ul> 
    );
}

export default SportsList;