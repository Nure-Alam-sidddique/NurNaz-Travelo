import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import DestinationsCard from '../../../DestinationCard/DestinationCard';

const PopularDestination = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(false);
  const populationLading = async () => {
    try {
     await  axios("https://whispering-fortress-90757.herokuapp.com/services").then(
      (response) => setDestinations(response.data)
      );
      setLoading(true);
      
    }
    catch(e){
      console.log(e);
    }
  }

  useEffect(() => {
    populationLading();
  }, [])
  // console.log(destinations);
    return (
      <div>
        <div>
          <h1 className="align-center text-primary mt-3 mb-2">Popular Destination</h1>
          <p className="align-center">
            The world is filled with such a wide variety of wonderful
            destinations and beautiful places
          </p>
        </div>
        <Row xs={1} md={4} className="g-4">
          {loading ? (
            destinations.map((destination) => (
              <DestinationsCard
                key={destination._id}
                destination={destination}
              ></DestinationsCard>
            ))
          ) : (
            <Spinner
              className="m-auto p-4 mt-3"
              animation="border"
              variant="primary"
            />
          )}
        </Row>
      </div>
    );
};

export default PopularDestination;