import React from "react";
import AddPlayer from "./AddPlayer"
import ShowPlayer from "./ShowPlayer"

class GameSection extends React.Component{

    state = {
        firstName: "",
        lastName: "",
        username: "",
        userList: [
            {}
        ],
        gamesPlayed: 0
    }

    handleChange = event => {
        this.setState({ value: event.target.value });
      };

    addUser = () => {
        this.setState((prevstate) => {

            return {
                items: [
                    ...prevstate.items,
                    {
                        id : this.state.username,
                        firstName: this.state.firstName,
                        lastName: this.state.lastName,
                        gamesPlayed: 0
                    }
                ],
            }
            
        })
    }



    render(){
        return (
            <React.Fragment>
                <AddPlayer
                     addUserToList={this.addUser}
                     ItemValue={this.state}
                     handleChange={this.handleChange}
             
                />
                {/* <RemovePlayer /> */}
                {this.state.userList.map((item, index) => <ShowPlayer key={index} itemText={item} />)}
            </React.Fragment>
            
            
        )
    }
}

export default GameSection;