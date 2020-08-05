import React from "react";

import { Badge } from "reactstrap";

function Greet(props) {
  return (
    <p>
      Hola mundo{props.firstName}
      {props.lastName} <Badge color="primary">Funtional Component</Badge>
    </p>
  );
}

export default Greet;
