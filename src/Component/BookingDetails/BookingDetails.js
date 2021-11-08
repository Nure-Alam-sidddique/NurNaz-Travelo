import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import '../Pages/Body/Services/Services.css';

const BookingPlace = () => {
  const { user } = useAuth();
    const { bookingId } = useParams()
    const [booking, setBooking] = useState([]);
  const url = `https://whispering-fortress-90757.herokuapp.com/singleService/${bookingId}`;
  useEffect(() => {
    axios(url).then(res => setBooking(res.data));
  },[])
    // useEffect(() => {
    //     axios(url).then(response => setBooking(response.data));
    // },[])
  const { placeName, description, imageURL, price } = booking;
  // console.log(imageURL);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    data.price = price;
    data.imageURL = imageURL;
    axios.post("https://whispering-fortress-90757.herokuapp.com/orderConfirm", data).then(res =>
    {
      if (res.data.insertedId) {
        alert("Data Successfully Send");
        console.log(res.data);
      }
      })
      
  };
    return (
      <section>
        <Container>
          <h1 className="text-align-center text-primary mt-3 mb-4">Your Booking Package</h1>
          <Row>
            <Col className={{ my: "10px"  }}>
              <Card>
                <Card.Img
                  variant="top"
                  style={{ width: "auto", height: "200px" }}
                  src={imageURL}
                />
                <Card.Body>
                  <Card.Title>{placeName}</Card.Title>
                  <Card.Text>{description}</Card.Text>
                  <Card.Text>Price: ${price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="add-services-form mt-5">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  defaultValue={user.displayName}
                  {...register("userName")}
                />
                <input defaultValue={user.email} {...register("email")} />
                <input
                  defaultValue={price}
                  type="number"
                  {...register("price")}
                />
                <input
                  defaultValue={placeName}
                  {...register("placeName")}
                />
                <input defaultValue={imageURL} {...register("imageURL")} />
                {/* <Link to={`/myorders/${booking._id}`}> */}
                  <input type="submit" value="Order" />
                {/* </Link> */}
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    );
};

export default BookingPlace;