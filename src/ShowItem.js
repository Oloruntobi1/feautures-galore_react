import React from "react";

function ShowItem (props){
    return (
        <ol className="item-list">
            <li>{props.itemText}</li>
        </ol>
    )
}

export default ShowItem;