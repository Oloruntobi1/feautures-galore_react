import React from "react";

class GameSection extends React.Component{

    state = {
        firstName: "",
        lastName: "",
        username: "",
        gamesPlayed: 0
    }

    addUser = () => {
        this.setState((prevstate) => {
            
        })
    }


    render(){
        return (
            <React.Fragment>
                <AddPlayer />
                <RemovePlayer />
            </React.Fragment>
            
            
        )
    }
}

export default GameSection;