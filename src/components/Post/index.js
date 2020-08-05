import React from "react";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

const Post = ({ tittle, subtittle, text, img }) => {
  return (
    <Card>
      <CardImg top width="100%" src={img} alt="Card image cap" />
      <CardBody>
        <CardTitle>{tittle}</CardTitle>
        <CardSubtitle>{subtittle}</CardSubtitle>
        <CardText>{text}</CardText>
      </CardBody>
    </Card>
  );
};

export default Post;
