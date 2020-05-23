import React from "react";

function DeleteLastItem(props){
    return (
        <button onClick={props.deleteItem} disabled={props.disableButton}>Delete Last Item</button>
    )
}

export default DeleteLastItem;