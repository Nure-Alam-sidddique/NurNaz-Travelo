import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import DestinationsCard from '../../../DestinationCard/DestinationCard';

const PopularDestination = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    axios("https://whispering-fortress-90757.herokuapp.com/services").then(
      (response) => setDestinations(response.data)
    );
  }, [])
  // console.log(destinations);
    return (
        <div>
            <div>
                <h1 className="align-center">Popular Destination</h1>
                <p className="align-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nemo est corporis laudantium, excepturi itaque et quos soluta dolorem repellat.</p>
            </div>
        <Row xs={1} md={4} className="g-4">
         {destinations.map(destination=><DestinationsCard key={destination._id} destination={destination}></DestinationsCard>)}
        </Row>
      </div>
    );
};

export default PopularDestination;