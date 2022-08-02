import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login({ setIsLoggedIn, setUserLogin }) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setIsLoggedIn(true);
    setUserLogin(formData)
    
    history.push("/");
  }

  const myStyle={
    backgroundImage: 
"url('https://bigaction.ag/sites/bigaction.ag/images/bg.jpg')",
    height:'100vh',
    marginTop:'-70px',
    fontSize:'20px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};

  return (
    <div style={myStyle}>
    
    <form onSubmit={handleSubmit} className="loginForm" >
    <div id="mydiv">
      <h1 align ="center" id="loginP">Mock SportsBook</h1>
      <h3 align ="center">Login: </h3>
      <input
        type="text"
        name="username"
        placeholder="Enter Username..."
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Enter Password..."
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </div>
    </form>
    </div>
  );
}

export default Login;
