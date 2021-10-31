import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (
      <div>
        
          <Row className="h-50 bg-primary">
            <Col xs={6} md={3}>
              Logo
            </Col>
            <Col xs={6} md={3}>
              Company
            </Col>
            <Col xs={6} md={3}>
            Popular Destination
            </Col>
            <Col xs={6} md={3}>
             Instragram
            </Col>
          </Row>
        
      </div>
    );
};

export default Footer;