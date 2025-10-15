import React from 'react';

function Student (props){
let {fnm, lnm } = props
    return(
        <h4> {props.fnm} {props.lnm}</h4>
    )
}


export default Student