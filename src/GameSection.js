import React from "react";
import AddPlayer from "./AddPlayer"
import ShowPlayers from "./ShowPlayers"

class GameSection extends React.Component{

    state = {
        firstName: "",
        lastName: "",
        userName: "",
        userList: [],
        gamesPlayed: 0,
        showGamesPlayed: true
    }

    handleChange = event => {
        const {name , value} = event.target
        this.setState({ [name]: value });
      };

    addUser = (event) => {
        event.preventDefault();
        // console.log(event.target.value)
        const myObj = {
            id: this.state.userName,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            gamesPlayed: this.state.gamesPlayed
          }

        //   console.log(Object.values(myObj))
        //   console.log(this.state.userList);
        //   if(Object.values(myObj).includes()){
              
        //   }


        // const {id, firstName, lastName} = myObj;
        // console.log(id)
        // this.setState(oldState => ({
        //     userList: [...oldState.userList, myObj],
        //   }));

        //   this.setState(oldState => {
        //       return [...oldState.userList]
        //   });

        this.setState(oldState => {
            const myFilter = oldState.userList.map((user) => user.id)
            if(myFilter.includes(myObj.id)){
                alert("sorry. username has been taken")
            } else {
                return {
                    userList: [...oldState.userList, myObj]
                }
            }
            
        });
        
    }

    inputIsEmpty = () => {
       
        const testFirstName = this.state.firstName === '';
        const testSecondName = this.state.lastName === '';
        const testUserName = this.state.userName === '';
        const myArray = [testFirstName, testSecondName, testUserName]
        const newArray = myArray.filter(item => item ===false)
          
       return newArray.length < 3
      };

    handleShowingScores(){
        this.setState((prevState) => ({
            showGamesPlayed: !prevState.showGamesPlayed
        }))
    }





    render(){
        return (
            <React.Fragment>
                <AddPlayer
                     addUserToList={this.addUser}
                     ItemValue={this.state}
                     handleChange={this.handleChange}
                     emptyInput={this.inputIsEmpty()}
                />
                {/* <RemovePlayer /> */}
                {this.state.userList.map((item) => <ShowPlayers 
                key={item.id} itemText={item}
                handleShowingScores={this.handleShowingScores()}
                showGamesPlayed={this.state.showGamesPlayed}
                />)}
            </React.Fragment>
            
            
        )
    }
}



export default GameSection;