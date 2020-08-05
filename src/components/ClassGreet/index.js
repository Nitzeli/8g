import React, { Component } from "react";

import { Badge } from "reactstrap";

class ClassGreet extends Component {
  render() {
    return (
      <p>
        Hola {this.props.firstName} {this.props.lastName}{" "}
        <Badge color="danger">Funtional Component</Badge>
      </p>
    );
  }
}

export default ClassGreet;
