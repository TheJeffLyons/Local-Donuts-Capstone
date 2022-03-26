import React from "react";
import { useFormik } from "formik";
import "../styles/signup.css";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      address: "",
      phone: "",
      password: "",
    },
    onSubmit: (values) => {
      axios
        .post("/api/signup", values)
        .then((res) => {
          alert(`User ${values.email} was created`);
        })
        .then((res) => {
          navigate("/signin");
        });
    },
  });

  return (
    <div className="signup-container">
      <h1 className="donut-tag-line">
        Your donuts are right around the corner!
      </h1>
      <form className="signup-form" onSubmit={formik.handleSubmit}>
        <div className="form-setup">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <br></br>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="firsName"
            name="firstName"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          <br></br>
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          <br></br>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Street Address, City, State Zip"
            onChange={formik.handleChange}
            value={formik.values.address}
          />
          <br></br>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
          <br></br>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <br></br>
        </div>
        <button className="signup-submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signup;
