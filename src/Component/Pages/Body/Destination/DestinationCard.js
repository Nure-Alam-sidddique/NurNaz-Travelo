import React from 'react';
import { Card, Col } from 'react-bootstrap';

const DestinationCard = ({ place }) => {
  console.log(place);
  const { imageURL, price, placeName } = place;
    return (
      <Col>
        <Card style={{ height: "300px", width: "300px" }}>
          <Card.Img variant="top" src={imageURL} className=" h-100 w-100" />
          <Card.Body>
            <Card.Title>{placeName}</Card.Title>
            {/* <Card.Text></Card.Text> */}
          </Card.Body>
        </Card>
      </Col>
    );
};

export default DestinationCard;