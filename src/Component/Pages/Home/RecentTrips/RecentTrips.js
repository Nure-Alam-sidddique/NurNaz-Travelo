import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const RecentTrips = () => {
    return (
      <div>
        <div>
          <h1>Recent Trips</h1>
        </div>
        <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://worldoftravelphotography.com/wp-content/uploads/2018/08/Things-I-learned-as-a-travel-photograher.jpg"
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

export default RecentTrips;