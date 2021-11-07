import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DestinationCard = ({ destination }) => {
  // const [place, setPlace] = useState({});
  // console.log(destination);
  // const handleBooking = data=> {
  //   const url = `https://whispering-fortress-90757.herokuapp.com/booking`;
  //   axios.post(url, data).then(res => {
  //     // console.log(res.data);
  //     if (res.data.insertedId) {
  //       alert("Booking Successfully");
  //     }
  //       // setPlace(res.data);
  //   });
  //   // e.preventDefault();
  // }
  // console.log( "comes from card Detailes ", destination.imageURL);
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
              <Card.Text>Tour Cost :$<span> {destination.price}</span></Card.Text>
              <Link to={`/booking/${destination._id}`}>
                <Button /*onClick={() => handleBooking(destination._id)}*/>
                  Booking
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
};

export default DestinationCard;