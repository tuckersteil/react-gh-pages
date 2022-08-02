import React, {useState} from "react";

function BetSlip({betSlipData, betData, resetBetSlip, setBetData}){
    console.log(betSlipData, betData)
    
    const [betFormData, setBetFormData] = useState({
        betAmount: ""
    })
    const betSlipStyle={
        width: "325px"
    }
    function handleChange(event) {
        setBetFormData({
          ...betFormData,
          [event.target.name]: event.target.value,
        });
      }
      //betData=== betSlipData.spread||betSlipData.over||betSlipData.under?"-110": betData
      function handleSubmit(event){
        event.preventDefault();
        console.log(betSlipData.over, betSlipData.under)
        
        const submitBet = {
            betamount: betFormData.betAmount,
            team:betSlipData.team,
            line: betData,
            odds: betData=== betSlipData.moneyline? betData: "-110"
        }
        console.log(submitBet)
        fetch("http://localhost:3002/bets", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(submitBet)
        })
        .then((r)=> r.json())
        .then((placeBet)=> console.log(placeBet))
        resetBetSlip([])
        setBetData([])
        setBetFormData({betAmount: ""})
      }
    
const juice = "-110"
return (
    <div id="mydiv"style={betSlipStyle} >
        <form onSubmit={handleSubmit}>
            <h1>Bet Slip:</h1>
            <h3>Team: {betSlipData.team}</h3> 
            {betData===betSlipData.moneyline? null:<h3>Line: {betData}</h3>}
            {betData===betSlipData.spread||betData===betSlipData.over||betData===betSlipData.under? <h3>Odds: -110</h3>:<h3>Odds: {betData}</h3>}
                <label>
                Bet Amount:
                    <input
                    placeholder="Enter Bet Amount..."
                    type="text"
                    name="betAmount"
                    value={betFormData.betAmount}
                    onChange={handleChange}
                    ></input>
                </label>
            <button type="submit">Place Bet</button>
        </form>
        
    </div>

);
}

export default BetSlip;