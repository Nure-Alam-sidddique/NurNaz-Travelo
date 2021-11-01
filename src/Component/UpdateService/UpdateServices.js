import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';

const UpdateServices = () => {
    const { updateId } = useParams();
    const [serviceUpdate, setServiceUpdate] = useState({});
    const url = `http://localhost:5000/services/${updateId}`;
    useEffect(() => {
        axios(url).then(res => setServiceUpdate(res.data));
    }, [])
    console.log('Comees forme upsdate', serviceUpdate);

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
    const handleUpdateInfo = e => {
        const url = `http://localhost:5000/services/${updateId}`;
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
        <div>
            <h1>Update Service {updateId }</h1>
            <h1>Name :  { serviceUpdate.placeName}</h1>
            <form onSubmit={handleUpdateInfo}>
                <input type='text' onChange={handleNameUpdater} value={ serviceUpdate.placeName || ' '}/>
                <input type='text' onChange={handleImageUpdater} value={serviceUpdate.imageURL || ' '} />
                <Button type='submit'>Update</Button>
            </form>
        </div>
    );
};

export default UpdateServices;