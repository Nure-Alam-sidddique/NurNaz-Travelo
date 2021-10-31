import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const PopularPlace = () => {
    return (
      <div>
        <div>
          <h1>Popular Palce</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            maxime quas explicabo sint vero quis earum quod eveniet adipisci
            doloremque.
          </p>
        </div>
        <Row xs={1} md={4} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://www.picsofasia.com/wp-content/uploads/2019/10/cropped-DSCF1599-3.jpg"
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

export default PopularPlace;