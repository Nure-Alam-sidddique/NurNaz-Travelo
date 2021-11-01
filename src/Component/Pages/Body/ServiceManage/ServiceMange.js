import Button from '@restart/ui/esm/Button';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const ServiceMange = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        axios("https://whispering-fortress-90757.herokuapp.com/services").then(
          (res) => setService(res.data)
        );
    },[])
    // console.log(service);

    const handleDelete = id => {
        const url = `https://whispering-fortress-90757.herokuapp.com/services/${id}`;
        axios.delete(url).then(res => {
            if (res.data.deletedCount) {
                alert("Deleted Successfully");
                const remaining = service.filter(place => place._id !== id);
                setService(remaining);
            }
        });
    }
    return (
      <div>
        <h1>This is Service Manage Page</h1>
        {service.map((place) => (
          <div>
            <p>{place.placeName}</p>
            <Button onClick={() => handleDelete(place._id)}>Delete</Button>
            <Link to={`/services/update/${place._id}`}>
              <Button>Update</Button>
            </Link>
          </div>
        ))}
      </div>
    );
};

export default ServiceMange;