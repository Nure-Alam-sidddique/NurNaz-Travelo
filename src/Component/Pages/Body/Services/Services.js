import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import './Services.css';

const Services = () => {
    const { register, handleSubmit, reset } = useForm();
  const [placeName, setPlaceName] = useState([]);
    const onSubmit = (data) => {
        // console.log(data);
      axios.post("http://localhost:5000/services", data).then(res => {
        if (res.data.insertedId) {
          alert("Data SuccessFully Send");
        }
        });
        reset();
     } ;
  useEffect(() => {
  axios("http://localhost:5000/services").then(res=>console.log(res.data))
}, [])
  
    return (
      <div className="add-services-form">
        <h1>This is Services Page</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Place Name"
            {...register("placeName", { required: true, maxLength: 20 })}
          />
          <textarea
            placeholder="Place Description"
            {...register("description")}
          />
          <input placeholder="Price" type="number" {...register("price")} />
          <input
            placeholder="./assets/images/photoName(.jpg/.jpeg)"
            {...register("imageURL")}
          />
          <input type="submit" />
        </form>
      </div>
    );
};

export default Services;