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
    };
    this.handleClick = this.handleClick.bind(this);
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
    console.log("me clickearon desde un método !!");
    console.log(this);
    let { counter } = this.state;
    counter = counter + 1;
    this.setState({
      counter,
    });
  }

  render() {
    return (
      <>
        <h1>
          <Badge color={this.state.color}>{this.state.date}</Badge>
        </h1>
        <Container>
          <p>
            {" "}
            <Badge color="primary">{this.state.counter}</Badge>
            <Button onClick={this.handleClick}>Add</Button>
          </p>
        </Container>
        <h2>{this.state.date}</h2>
      </>
    );
  }
}
export default Clock;
