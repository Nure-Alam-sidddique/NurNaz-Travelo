import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import './UpdateService.css';

const UpdateServices = () => {
    const { updateId } = useParams();
    const [serviceUpdate, setServiceUpdate] = useState({});
    const url = `https://whispering-fortress-90757.herokuapp.com/services/${updateId}`;
    useEffect(() => {
        axios(url).then(res => setServiceUpdate(res.data));
    }, [])
    // console.log('Comees forme upsdate', serviceUpdate);

    const handleNameUpdater = (e) => {
        const placeName = e.target.value;
        const updatedData = { ...serviceUpdate };
        updatedData.placeName = placeName;
        setServiceUpdate(updatedData);
          e.preventDefault();
    }
    const handleImageUpdater = e => {
        const imageURL = e.target.value;
        const updatedData = { ...serviceUpdate };
        updatedData.imageURL = imageURL;
        setServiceUpdate(updatedData);
        e.preventDefault();
    }
    const handlePriceUpdater = e => {
        const priceUpdate = e.target.value;
        const updatedData = { ...serviceUpdate };
        updatedData.priceUpdate = priceUpdate;
        setServiceUpdate(updatedData);
        e.preventDefault();
    }
    const handleUpdateInfo = e => {
        const url = `https://whispering-fortress-90757.herokuapp.com/${updateId}`;
        fetch(url, {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(serviceUpdate),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              alert("Updated Successfully");
              setServiceUpdate({});
            }
          });
        e.preventDefault();
    }
    return (
      <div className="add-services-form">
        <h1 className="text-align text-primary mt-3 mb-4">Update Service</h1>
        {/* <h1>Name : {serviceUpdate.placeName}</h1> */}
        <form onSubmit={handleUpdateInfo} className="mb-5">
          <input
          placeholder="PlaceName"
            type="text"
            onChange={handleNameUpdater}
            value={serviceUpdate.placeName || ""}
          />
          <input
            placeholder="Price"
            type="number"
            onChange={handlePriceUpdater}
             value ={serviceUpdate.price || ""}
          />
          <input
            placeholder="ImageURL"
            type="text"
            onChange={handleImageUpdater}
            value={serviceUpdate.imageURL || ""}
          />
          <Button type="submit">Update</Button>
        </form>
      </div>
    );
};

export default UpdateServices;