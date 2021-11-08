import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import './Services.css';

const Services = () => {
    const { register, handleSubmit, reset } = useForm();
  const [placeName, setPlaceName] = useState([]);
    const onSubmit = (data) => {
        // console.log(data);
      axios.post("https://whispering-fortress-90757.herokuapp.com/services", data).then((res) => {
        if (res.data.insertedId) {
          alert("Data SuccessFully Send");
        }
      });
        reset();
     } ;
  useEffect(() => {
  axios("https://whispering-fortress-90757.herokuapp.com/services").then(
    (res) => console.log(res.data)
  );
}, [])
  
    return (
      <div className="add-services-form">
        <h1 className="text-align-center text-primary mt-3 mb-4"> Add Service</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Place Name"
            {...register("placeName", { required: true, maxLength: 20 })}
          />
          <input
             type="date"
            {...register("date", { required: true })}
          />
          <textarea
            placeholder="Place Description"
            {...register("description")}
          />
          <input placeholder="Price" type="number" {...register("price")} />
          <input
            placeholder="image Link"
            {...register("imageURL")}
          />
          <input type="submit" />
        </form>
      </div>
    );
};

export default Services;