import React from "react";

// function Greet() {
//     return <h1>Hello Subham</h1>;
// }

const Greet = (props) =>  {
    return (
    <div>
        <h1>Hello {props.name} a.k.a {props.heroName}</h1>
        {props.children}
    </div>
    )
}   
// const Greet = () => {
//     return <h1>Hello Subham</h1>;
// }

export default Greet;