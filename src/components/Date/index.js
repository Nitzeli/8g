import React, { Component } from "react";

import { Badge, Container, Button } from "reactstrap";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialDate: new Date().toLocaleTimeString(),
      date: new Date().toLocaleTimeString(),
      color: "danger",
      counter: 1,
      colorChange: true,
    };
    this.handleClick = this.handleClick.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        date: new Date().toLocaleTimeString(),
        color: "primary",
      });
    }, 2000);
  }

  handleClick() {
    //   console.log("me clickearon desde un método !!");
    //   console.log(this);
    let { counter } = this.state;
    counter = counter + 1;
    this.setState({
      counter,
    });
  }

  changeColor() {
    this.setState({ colorChange: !this.state.colorChange });
  }

  render() {
    let newColor = !this.state.colorChange ? "warning" : "primary";

    return (
      <>
        <h1>
          <Badge color={this.state.color}>{this.state.date}</Badge>
        </h1>

        <Container>
          <p>
            {" "}
            <Badge color="primary">{this.state.counter}</Badge>
          </p>
          <Button color={newColor} onClick={this.changeColor}>
            Add
          </Button>
        </Container>
        <h2>{this.state.date}</h2>
      </>
    );
  }
}
export default Clock;
