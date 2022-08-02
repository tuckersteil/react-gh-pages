import React, {useEffect, useState} from "react";

function Pending({userLogin}){
    const[pendingBets, setPendingBets]=useState([])
    useEffect(()=> {
        fetch("http://localhost:3002/bets")
        .then((r) => r.json())
        .then((bets)=> setPendingBets(bets))
        },[])
        
        
        const betSlipStyle={
            width: "325px"
        }

        console.log(pendingBets)
    return (
        <div>
            <h1>Pending Bets For...<p>User: {userLogin.username}</p>
                <ul style={betSlipStyle}>{pendingBets.map((bet)=> (
                    <li key={bet.id} className="pending">
                        <p className="caption">Team:</p>
                        <p className="betText">{bet.team}</p>
                        <p className="caption">Line:</p>
                        <p className="betText">{bet.line===bet.odds? "MoneyLine": bet.line}</p>
                        <p className="caption">Odds:</p>
                        <p className="betText">{bet.odds}</p>
                        <p className="caption">Bet Amount:</p>
                        <p className="betText">${bet.betamount}</p>
                    </li>
                ))}</ul>
            </h1>
        </div>
    );
}

export default Pending;