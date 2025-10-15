

// function College(){
//     return <h1>College: George Brown College , Toronto </h1>
// }



import React from "react";

class College extends React.Component
{
    constructor()
    {
        super()
        this.props = {

        }

        this.state = {
            x: 100,
            name: " Pariteh"
        }
    }
    render()
    {
        return <h1>College: George Brown College, Toronto</h1>
    }
}

export default College