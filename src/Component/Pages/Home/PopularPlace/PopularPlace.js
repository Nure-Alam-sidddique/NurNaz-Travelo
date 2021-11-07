import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import './PopularPlace.css';

const PopularPlace = () => {
  const [places, setPlace] = useState([]);
  const [loading, setLoading] = useState(false);
  const popularPalceLoading = async () => {
    try {
      await axios(
        "https://whispering-fortress-90757.herokuapp.com/services"
      ).then((res) => setPlace(res.data));
      setLoading(true);
    }
    catch (e) {
      console.log(e);
    }
    
  }
  useEffect(() => {
    popularPalceLoading();
  },[])
 
    return (
      <section>
        <div>
          <h1>Popular Palce</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            maxime quas explicabo sint vero quis earum quod eveniet adipisci
            doloremque.
          </p>
        </div>
        <Row xs={1} md={4} className="g-4">
          {loading ? (
            places.slice(0, 8).map((place) => (
              <Col key={place._id}>
                <Card className="h-50">
                  {/* <Card.Img variant="top" src={place.imageURL} />
                <Card.Body className={{zindexPopover: 1070}}>{place.placeName}</Card.Body> */}
                  <figure className="position-relative">
                    <img
                      style={{ width: "100%", height: "200px" }}
                      src={place.imageURL}
                      alt={place.placeName}
                      className="img-fluid"
                    />
                    <figcaption>{place.placeName}</figcaption>
                  </figure>
                </Card>
              </Col>
            ))
          ) : (
            <Spinner
              className="m-auto p-4 mt-3"
              animation="border"
              variant="primary"
            />
          )}
        </Row>
      </section>
    );
};

export default PopularPlace;