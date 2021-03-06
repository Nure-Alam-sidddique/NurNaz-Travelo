import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const RecentTrips = () => {
    return (
      <div>
        <div>
          <h1 className="text-align-center text-primary mt-3 mb-4">Recent Trips</h1>
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
                  <Card.Title>Beautiful Moment </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
};

export default RecentTrips;