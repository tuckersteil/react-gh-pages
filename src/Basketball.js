import React from "react";

function Basketball({nba, getBetData}){
    console.log(nba)
    function handleclick(game, e){
        getBetData(game, e)
    }
    return (
        <div>
            <h1>Basketball Lines:</h1>
            <table>
                <thead>
                    <tr>
                        <th>Teams</th>
                        <th>Spread</th>
                        <th>Moneyline</th>
                        <th>Over/Under</th>
                    </tr>
                </thead>
                {nba.map((game, id) => (
                <tbody key={id}>
                    <tr>
                        <th>{game.homeTeam.team}</th>
                        <td><button onClick={(e)=>handleclick(game.homeTeam, e)}>{game.homeTeam.spread}</button></td>
                        <td><button onClick={(e)=>handleclick(game.homeTeam, e)}>{game.homeTeam.moneyline}</button></td>
                        <td><button onClick={(e)=>handleclick(game.homeTeam, e)}>{game.homeTeam.over}</button></td>
                    </tr>
                    <tr>
                        <th>{game.awayTeam.team}</th>
                        <td><button onClick={(e)=>handleclick(game.awayTeam, e)}>{game.awayTeam.spread}</button></td>
                        <td><button onClick={(e)=>handleclick(game.awayTeam, e)}>{game.awayTeam.moneyline}</button></td>
                        <td><button onClick={(e)=>handleclick(game.awayTeam, e)}>{game.awayTeam.under}</button></td>
                    </tr>
                    <tr id="blank">
                        <th>{}</th>
                        <td>{}</td>
                        <td>{}</td>
                        <td>{}</td>
                    </tr>
                
                </tbody>
                ))}
            </table>
        </div>
    );
}

export default Basketball;