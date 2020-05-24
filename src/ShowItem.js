import React from "react";

function ShowItem (props){
    // console.log(key)
    return (
       

        <ol className="item-list">
            <li>{props.itemText}</li>
        </ol>
       

        
    )
}

export default ShowItem;