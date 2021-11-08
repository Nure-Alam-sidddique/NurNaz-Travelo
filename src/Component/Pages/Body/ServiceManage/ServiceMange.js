import Button from '@restart/ui/esm/Button';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const ServiceMange = () => {
    const [service, setService] = useState([]);
  const [loading, setLoading] = useState(false);
  const loadingServices = async () => {
    axios("https://whispering-fortress-90757.herokuapp.com/services").then(
      (res) => {
        setService(res.data);
        setLoading(true);
      }
    );
  }
  
    useEffect(() => {
      loadingServices();
    },[])
    // console.log(service);

    const handleDelete = id => {
      const procceed = window.confirm("Are you sure want to delete you?");
      if (procceed) {
        const url = `https://whispering-fortress-90757.herokuapp.com/services/${id}`;
        axios.delete(url).then((res) => {
          if (res.data.deletedCount>0) {
            alert("Deleted Successfully");
            const remaining = service.filter((place) => place._id !== id);
            setService(remaining);
          }
        });
      }
    }
    return (
      <section>
        <h1 className="text-primary my-4"> Service Manage </h1>
        <Row xs={1} md={4} className="g-4">
          { loading? service.map((place) => (
            <Col>
              <Card>
                <Card.Img variant="top" src={place.imageURL} />
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
          )):  <Spinner
              className="m-auto p-4 mt-5"
              animation="border"
              variant="primary"
            />}
        </Row>
      </section>
    );
};

export default ServiceMange;