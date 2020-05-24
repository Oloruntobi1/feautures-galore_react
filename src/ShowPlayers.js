import React from "react";

function ShowPlayers({itemText}, handleShowingScores, showGamesPlayed){
    // console.log(props)
    console.log(showGamesPlayed)
    return (
        <ol className="item-list">
            <li>{itemText.id} has played {showGamesPlayed ? <p> {itemText.gamesPlayed} </p> : <p> * </p>} games</li>
            
            <button onClick={handleShowingScores}>{showGamesPlayed ? "Hide Games Played" : "Show Games Played"}</button>
        </ol>
    )
}

export default ShowPlayers