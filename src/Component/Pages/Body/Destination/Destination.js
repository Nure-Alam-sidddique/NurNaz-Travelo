import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import DestinationCard from './DestinationCard';

const Destination = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);
  const placeLoading = async () => {
    axios("https://nurnaztravelo.web.app/services").then((res) => {
      setPlaces(res.data);
      setLoading(true);
    });
  }
  useEffect(() => {
    placeLoading();
  },[])
    return (
      <div className="mt-5">
        <Row xs={1} md={4} className="g-4">
          {loading ? (
            places.map((place) => (
              <DestinationCard key={place.id} place={place}></DestinationCard>
            ))
          ) : (
            <Spinner
              className="m-auto p-4 mt-5"
              animation="border"
              variant="primary"
            />
          )}
        </Row>
      </div>
    );
};

export default Destination;