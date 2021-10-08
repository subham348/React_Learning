import React, { Component } from "react";

class Sourav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      text: "",
    };
  }

  getColor() {
    let color = "black";
    const { count } = this.state;
    // if (this.state.count === 0) {
    //   this.setState({
    //     colour: "black",
    //   });
    // } else if (this.state.count > 0) {
    //   this.setState({
    //     colour: "green",
    //   });
    // } else {
    //   this.setState({
    //     colour: "red",
    //   });
    // }

    if (count > 0) {
      color = "green";
    }

    if (count < 0) {
      color = "red";
    }

    return color;
  }

  increment() {
    this.setState((state) => ({
      count: state.count + 1,
    }));
    // this.colourChanger();
  }

  decrement() {
    this.setState((state) => ({
      count: state.count - 1,
    }));
    // this.colourChanger();
  }

  handleText = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  render() {
    return (
      <>
        <button onClick={this.decrement.bind(this)}>Dislike</button>
        <span style={{ color: this.getColor() }}>
          Overall {this.state.count}
        </span>
        <button onClick={this.increment.bind(this)}>Like</button>
        <div>
          <textarea
            value={this.state.text}
            onChange={this.handleText}
          ></textarea>
        </div>
        Hello {this.state.text}
      </>
    );
  }
}

export default Sourav;
