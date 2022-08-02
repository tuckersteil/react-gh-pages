import React, {useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./NavBar";
import Home from "./Home";
import Login from "./Login";
import Pending from "./Pending";
import SportsList from "./SportsList";
import Basketball from "./Basketball";
import Baseball from "./Baseball";
import Football from "./Football";
import BetSlip from "./BetSlip";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [betSlipGame, setBetSlipGame] = useState([]);
  const [betData, setBetData] = useState([]);
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

  function getBetData(game, e){
    console.log(game, e)
    setBetSlipGame(game)
    setBetData(e.target.innerText)
  }


  return (
    <div >
      <Switch>
        <Route exact path="/login">
          <Login setIsLoggedIn={setIsLoggedIn} setUserLogin={setUserLogin}/>
        </Route>
        <Route exact path="/">
          <Navbar setIsLoggedIn={setIsLoggedIn}/>
          <Home isLoggedIn={isLoggedIn} />
        </Route>
        <Route exact path="/pending">
          <Navbar setIsLoggedIn={setIsLoggedIn}/>
          <Pending userLogin={userLogin}/>
        </Route>

        <Route exact path="/basketball">
          <Navbar setIsLoggedIn={setIsLoggedIn}/>
          <Basketball nba={nba} getBetData={getBetData}/>
          <BetSlip betSlipData={betSlipGame} betData={betData} resetBetSlip={setBetSlipGame} setBetData={setBetData}/>
        </Route>
        <Route exact path="/baseball">
          <Navbar setIsLoggedIn={setIsLoggedIn}/>
          <Baseball mlb={mlb} getBetData={getBetData}/>
          <BetSlip betSlipData={betSlipGame} betData={betData} resetBetSlip={setBetSlipGame} setBetData={setBetData}/>
        </Route>
        <Route exact path="/football">
          <Navbar setIsLoggedIn={setIsLoggedIn}/>
          <Football nfl={nfl} getBetData={getBetData}/>
          <BetSlip betSlipData={betSlipGame} betData={betData} resetBetSlip={setBetSlipGame} setBetData={setBetData}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
