import React, { Component } from "react";

import "./Post.css";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardGroup,
  Button,
} from "reactstrap";

const cards = [
  {
    position: 1,
    CardImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUrzZ6US-8sKq5O3XBhIxjkBtGAhnLEeRokw&usqp=CAU",
    CardTitle: "My Black Friend Corrected ",
    CardSubtitle: "Unwittingly Racist Statement",
    CardText:
      "This story actually begins with the fact that I don’t have a gall bladder. I had mine removed when I was eighteen. This means if I overdo it with rich food, I feel sluggish and bloated. It’s just one of my body’s quirks.",
  },
  {
    position: 2,
    CardImg:
      "https://4.bp.blogspot.com/-pyAjnCVwSgs/TkNeqts_uEI/AAAAAAAABNI/tHSrhnYUxLw/s400/rosas1.jpg",
    CardTitle: "And that quirk is how I found out I was using",
    CardSubtitle: "Then I learned it had a toxic history",
    CardText:
      "Late last year after a holiday meal, I posted on Facebook that I was suffering from “the ‘itis”. It’s a term I’d known of for a long time that to me meant the feeling of being sluggish and overstuffed. Kind of a joke I’d make after overindulging.",
  },
  {
    position: 3,
    CardImg:
      "https://www.jardineriaon.com/wp-content/uploads/2018/04/flores-decorativas-y-vistosas.jpg",
    CardTitle: "racist language without realizing it.",
    CardSubtitle: "Then I learned it had a toxic history",
    CardText:
      "A former colleague reached out to me on Facebook Messenger about my post. We’d always had a nice relationship. Now and then we’d run into each other and talk about issues of faith and family. We even prayed for needs in each other’s lives. Once she moved on to attend seminary, we stayed in touch on Facebook.",
  },
];

class Post extends Component {
  render() {
    const UICards = cards.map((cards) => {
      const upperTittle = cards.CardTitle.toUpperCase();
      return (
        <Card>
          <CardImg
            top
            className="cardsPost "
            width="100%"
            src={cards.CardImg}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle> {upperTittle}</CardTitle>
            <CardSubtitle>{cards.CardSubtitle}</CardSubtitle>
            <CardText>{cards.CardText}</CardText>
            <Button>Read More</Button>
          </CardBody>
        </Card>
      );
    });

    return <CardGroup>{UICards}</CardGroup>;
  }
}
export default Post;
