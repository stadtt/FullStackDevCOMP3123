import React from "react";

function Title(props){
   
    return (

        <div>
            <h1> {props.title.appName}</h1>
            <h2> {props.title.labName}</h2>
        </div>

    )
}

export default Title