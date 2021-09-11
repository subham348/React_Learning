import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    // 3rd Method
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({
      message: "Goodbye!",
    });
  }

  //   4th Method
  //   clickHandler = () => {
  //     this.setState({
  //       message: "Goodbye!",
  //     });
  //   };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* 1st Method: Binding in the render method */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

        {/* 2nd Method: Using arrow functions in the render method  */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}

        {/* 3rd Method: binding the event handler in the constructor opposed to binding in the render method  */}
        <button onClick={this.clickHandler}>Click</button>

        {/* 4th Method: Use an arrow function as a class property */}
        {/* <button onClick={this.clickHandler}>Click</button> */}
      </div>
    );
  }
}

export default EventBind;
