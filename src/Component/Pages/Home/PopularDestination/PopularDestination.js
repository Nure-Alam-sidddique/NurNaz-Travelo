import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const PopularDestination = () => {
    return (
        <div>
            <div>
                <h1 className="align-center">Popular Destination</h1>
                <p className="align-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nemo est corporis laudantium, excepturi itaque et quos soluta dolorem repellat.</p>
            </div>
        <Row xs={1} md={4} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://cdn.photoworkout.com/wp-content/uploads/2018/06/Travel-Photography-Tips.jpg"
                />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
};

export default PopularDestination;