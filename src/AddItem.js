import React from "react";

function AddItem(props){
    return(
        <form onSubmit={props.addItemToList}>
          <input
            type="text"
            placeholder="Enter New Item"
            value={props.ItemValue}
            onChange={props.handleChange}
          />
          <button disabled={props.emptyInput}>Add</button>
        </form>
    )
}

export default AddItem;