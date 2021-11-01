
import axios from 'axios';
import React, { useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DestinationCard = ({ destination }) => {
  const [place, setPlace] = useState({});
  console.log(destination);
  const handleBooking = data=> {
    const url = `http://localhost:5000/booking`;
    axios.post(url, data).then(res => setPlace(res.data));
    // e.preventDefault();
  }
  
    return (
      <div>
        <Col >
          <Card style={{ height: "auto" }}>
            <Card.Img
              variant="top"
              style={{ width: "auto", height: "200px" }}
              src={destination.imageURL}
            />
            <Card.Body>
              <Card.Title>{destination.placeName}</Card.Title>
              <Card.Text>{destination.description}</Card.Text>
              <Link to={`/booking/${destination.id}`}>
                <Button onClick={() => handleBooking(destination.id)}>
                  Booking{" "}
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
};

export default DestinationCard;