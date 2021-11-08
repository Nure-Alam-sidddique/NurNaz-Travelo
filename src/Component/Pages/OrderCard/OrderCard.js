import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const OrderCard = (props) => {
    const { imageURL, userName, _id , price} = props.orders;
    console.log(props);
    return (
      <Col>
         <Card>
       <Card.Img variant="top" src={imageURL} />
       <Card.Body>
            <Card.Title>{userName}</Card.Title>
         <Card.Text>
           This is a longer card with supporting text below as a natural
           lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Card.Text>Price : ${ price}</Card.Text>
            <Button variant="outline-danger" className="bg-danger border-outline-none px-3 py-1 text-white" onClick={()=>props.handleDelete(_id)}>Cancle</Button>
        </Card.Body>
    </Card>
      </Col>
    );
};

export default OrderCard;