import React, { Component } from "react";
import { Container, Row, ListGroup, ListGroupItem, Col } from "reactstrap";
import "./List.css";

const elements = [
  {
    position: 1,
    text: "perro",
  },
  {
    position: 2,
    text: "text 2",
  },
  {
    position: 3,
    text: "text 3",
  },
];

class List extends Component {
  render() {
    const UIElements = elements.map(({ text }) => (
      <ListGroupItem className="List-item">{text}</ListGroupItem>
    ));

    return (
      <Container>
        <Row>
          <Col>
            <ListGroup>{UIElements}</ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default List;
