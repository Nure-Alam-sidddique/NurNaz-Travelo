import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import OrderCard from '../OrderCard/OrderCard';
const Myorders = () => {
    const [myorders, setMyorders] = useState([]);
    useEffect(() => {
        axios("https://whispering-fortress-90757.herokuapp.com/myorders").then(
          (res) => setMyorders(res.data)
        );
    }, [])
    // console.log(myorders);
      const handleDelete = (id) => {
        const procced = window.confirm('Are you sure you want to delete your Order?');
        if (procced) {
            const url = `https://whispering-fortress-90757.herokuapp.com/booking/${id}`;
            axios.delete(url).then((res) => {
              if (res.data.deletedCount) {
                alert("Deleted Successfully");
                const remaining = myorders.filter((place) => place._id !== id);
                setMyorders(remaining);
              }
            });
          
        }
      
      };
    return (
      <div>
      <h1 className="text-align-center text-primary mt-4 mb-3">My Orders</h1>
        <Row xs={1} md={2} className="g-4">

          {
            myorders.map(order=><OrderCard key={order._id} orders={order} handleDelete={handleDelete}></OrderCard>)
          }
        </Row>
      </div>
    );
};

export default Myorders;