import React from "react";

function AddPlayer(props){
    return (
        <form onSubmit={props.addUserToList}>
          <input
            type="text"
            placeholder="Enter First Name"
            value={props.ItemValue.firstName}
            onChange={props.handleChange}
          />
          <input
            type="text"
            placeholder="Enter Last Name"
            value={props.ItemValue.lastName}
            onChange={props.handleChange}
          />
          <input
            type="text"
            placeholder="Enter Username"
            value={props.ItemValue.username}
            onChange={props.handleChange}
          />
          {/* <button disabled={props.emptyInput}>Add</button> */}
          <button>Add</button>
        </form>
    )
}

export default AddPlayer;