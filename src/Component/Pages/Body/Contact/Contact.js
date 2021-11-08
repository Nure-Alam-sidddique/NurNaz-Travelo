import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './Contact.css';
const Contact = () => {
     const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        axios
          .post("https://whispering-fortress-90757.herokuapp.com/users", data)
          .then((res) => {
            if (res.data.insertedId) {
              alert("Data Successfully Send");
            }
          });
        console.log(data)
        reset();
    };
    return (
      <div className="add-services-form ">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="w-25">
          <input placeholder="Name" {...register("userName", { required: true, maxLength: 20 })} />
          <input placeholder="E-mail" {...register("email", { required: true })} />
          <input placeholder="Location" {...register("location", { required: true })} />
          <input placeholder="Mobile No" type="mobile" {...register("mobile")} />
          <input type="submit" />
        </form>
      </div>
    );
};

export default Contact;