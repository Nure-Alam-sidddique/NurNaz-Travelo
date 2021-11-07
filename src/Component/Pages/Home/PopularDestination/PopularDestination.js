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
          <h1 className="align-center">Popular Destination</h1>
          <p className="align-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nemo
            est corporis laudantium, excepturi itaque et quos soluta dolorem
            repellat.
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
            <Spinner className="m-auto p-4 mt-3" animation="border" variant="primary" />
          )}
        </Row>
      </div>
    );
};

export default PopularDestination;