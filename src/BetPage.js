import React, {useState} from "react";
import BetSlip from "./BetSlip";

function BetPage({sport, getBetData, sportName}){  
    const [betSlipGame, setBetSlipGame] = useState([]);
    const [betData, setBetData] = useState([]);

    function getBetData(game, e){
        console.log(game, e)
        setBetSlipGame(game)
        setBetData(e.target.innerText)
      }
    
      function createTeamRow(team){
          return (
            <tr>
                <th>{team.teamName}</th>
                <td><button onClick={(e)=>getBetData(team, e)}>{team.spread}</button></td>
                <td><button onClick={(e)=>getBetData(team, e)}>{team.moneyline}</button></td>
                <td><button onClick={(e)=>getBetData(team, e)}>{team.gameTotal}</button></td>
            </tr>
          )
      }
    return (
        <div>
            <h1>{sportName} Lines:</h1>
            <table>
                <thead>
                    <tr>
                        <th>Teams</th>
                        <th>Spread</th>
                        <th>Moneyline</th>
                        <th>Over/Under</th>
                    </tr>
                </thead>
                {sport.map((game, id) => (
                <tbody key={id}>
                    {createTeamRow(game.homeTeam)}
                    {createTeamRow(game.awayTeam)}
                    <tr id="blank">
                        <th>{}</th>
                        <td>{}</td>
                        <td>{}</td>
                        <td>{}</td>
                    </tr>
                
                </tbody>
                ))}
            </table>
            <BetSlip betSlipData={betSlipGame} betData={betData} resetBetSlip={setBetSlipGame} setBetData={setBetData}/>
        </div>
    );
}

export default BetPage;