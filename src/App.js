import React, {useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./NavBar";
import Home from "./Home";
import Login from "./Login";
import Pending from "./Pending";
import BetPage from "./BetPage";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userLogin, setUserLogin]= useState([])

  const [nba, setNba]=useState([])
  const [mlb, setMlb]=useState([])
  const [nfl, setNfl]=useState([])

    useEffect(()=> {
        fetch("http://localhost:3001/sports")
        .then((r) => r.json())
        .then((sports)=> {
          getBaseball(sports)
          getBasketball(sports)
          getFootball(sports)
        })
    },[])
  
    function getBasketball(sports){
      const basketballLines = sports.filter(games=> games.sport === "Basketball")
      setNba(basketballLines)
  }

    function getBaseball(sports){
      const baseballLines = sports.filter(games=> games.sport === "Baseball")
      setMlb(baseballLines)
  } 
    function getFootball(sports){
      const footballLines = sports.filter(games=> games.sport === "Football")
      setNfl(footballLines)
  }

  

  return (
    <div >
      <Navbar setIsLoggedIn={setIsLoggedIn}/>
      <Switch>
        <Route exact path="/login">
          <Login setIsLoggedIn={setIsLoggedIn} setUserLogin={setUserLogin}/>
        </Route>
        <Route exact path="/">
          
          <Home isLoggedIn={isLoggedIn} />
        </Route>
        <Route exact path="/pending">
          <Pending userLogin={userLogin} isLoggedIn={isLoggedIn}/>
        </Route>

        <Route exact path="/basketball">
          <BetPage sport={nba} sportName={"Basketball"}/>
        </Route>
        <Route exact path="/baseball">
          <BetPage sport={mlb} sportName={"Baseball"}/>
        </Route>
        <Route exact path="/football">
          <BetPage sport={nfl} sportName={"Football"}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
