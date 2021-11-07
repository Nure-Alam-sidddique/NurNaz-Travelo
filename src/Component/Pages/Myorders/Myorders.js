import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import OrderCard from '../OrderCard/OrderCard';
const Myorders = () => {
    const [myorders, setMyorders] = useState([]);
    useEffect(() => {
        axios("https://nurnaztravelo.web.app/myorders").then((res) =>
          setMyorders(res.data)
        );
    }, [])
    // console.log(myorders);
      const handleDelete = (id) => {
        const url = `https://nurnaztravelo.web.app/booking/${id}`;
        axios.delete(url).then((res) => {
          if (res.data.deletedCount) {
            alert("Deleted Successfully");
            const remaining = myorders.filter((place) => place._id !== id);
            setMyorders(remaining);
          }
        });
      };
    return (
      <div>
        <Row xs={1} md={2} className="g-4">
          {
            myorders.map(order=><OrderCard key={order._id} orders={order} handleDelete={handleDelete}></OrderCard>)
          }
        </Row>
      </div>
    );
};

export default Myorders;