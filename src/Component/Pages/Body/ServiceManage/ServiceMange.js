import Button from '@restart/ui/esm/Button';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
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
      <section>
        <h1>This is Service Manage Page</h1>
        <Row xs={1} md={4} className="g-4">
          {service.map((place) => (
            <Col>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>{place.placeName}</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                  <Button variant="danger" onClick={() => handleDelete(place._id)} className="bg-danger text-white rounded border-0 px-4 py-1">Delete</Button>
                <Link to={`/services/update/${place._id}`}>
                  <Button variant='success' className="bg-success ms-2 text-white rounded border-0 px-4 py-1">Update</Button>
                </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    );
};

export default ServiceMange;