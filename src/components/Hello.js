import React from "react";

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello Subham</h1>
    //     </div>
    // )
    return React.createElement("div", {id: "hello", className: "hello"}, React.createElement("h1", null, "Hello World"));
}

export default Hello;