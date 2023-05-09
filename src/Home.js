import React, {useState} from "react";
import { Redirect } from "react-router-dom";
import {NavLink} from "react-router-dom"


function Home({ isLoggedIn }) {
  const [text, setText]= useState("")
  const [counter, setCounter]= useState(0)
  if (!isLoggedIn) return <Redirect to="/login" />;

  function handleText(e){
    setText(e.target.value)
  }

  function handleClick(e){
    e.preventDefault()
    const newCount = text.length
    setCounter(counter + newCount)
  }
console.log(text)
  return (
    <div>
        <h1>Sports:</h1>
        <ul>
          <li><NavLink to="/basketball" exact>Basketball</NavLink></li>
          <li><NavLink to="/baseball" exact>Baseball</NavLink></li>
          <li><NavLink to="/football" exact>Football</NavLink></li>
          <form>
            <input 
            type="text"
            value={text}
            onChange={handleText}
            >
            </input>
            <button onClick={handleClick}>Click Me!</button>
            <p>{counter}</p>
          </form>
        </ul> 
    </div>
  );
}

export default Home;