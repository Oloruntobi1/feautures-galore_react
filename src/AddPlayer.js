import React from "react";

function AddPlayer(props){
  // console.log(props.ItemValue)
    return (
        <form onSubmit={props.addUserToList}>
          <input
            type="text"
            name="firstName"
            placeholder="Enter First Name"
            value={props.ItemValue.firstName}
            onChange={props.handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Enter Last Name"
            value={props.ItemValue.lastName}
            onChange={props.handleChange}
          />
          <input
            type="text"
            name="userName"
            placeholder="Enter Username"
            value={props.ItemValue.userName}
            onChange={props.handleChange}
          />
          {/* <button disabled={props.emptyInput}>Add</button> */}
          <button disabled={props.emptyInput}>Add</button>
        </form>
    )
}

export default AddPlayer;