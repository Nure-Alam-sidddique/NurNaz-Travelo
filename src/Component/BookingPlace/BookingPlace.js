import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { useParams } from 'react-router';

const BookingPlace = () => {
    const { bookingId } = useParams()
    const [booking, setBooking] = useState([]);
    const url = `https://fakestoreapi.com/products/${bookingId}`;
    useEffect(() => {
        axios(url).then(response => setBooking(response.data));
    },[])
    return (
      <div>
        <h1>Booking The beautiful Order{bookingId}</h1>
        <Col>
          <Card>
            <Card.Img variant="top h-25 w-25 m-auto" src={booking.image} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>{booking.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
};

export default BookingPlace;