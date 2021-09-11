import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    // Short Cuicuit Operator Approach
    return this.state.isLoggedIn && <div>Welcome Subham</div>;

    // 3rd Method: Ternary Conditional Operator
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Subham</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    // 2nd Method: Elements variable
    //   let message
    //   if (this.state.isLoggedIn) {
    //       message = <div>Welcome Subham</div>
    //   } else {
    //       message = <div>Welcome Guest</div>
    //   }

    //   return <div>{message}</div>

    // 1st Method: Using if-else
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Subham</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }

    // return (
    //   <duv>
    //     <div>Welcome Subham</div>
    //     <div>Welcome Guest</div>
    //   </duv>
    // );
  }
}

export default UserGreeting;
