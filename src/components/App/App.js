import React, { useState } from "react";
import Axios from "axios";
import "./App.css";
import { BackendApi } from "../../config";

require('dotenv').config();

export const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");



  const addToList = () => {
    Axios.post(`${BackendApi}/insert`, {
      firstName: firstName,
      lastName: lastName,
      email: email,
    });
    alert("Saved: contact has been added to contact list!")
  };

 

  return (
    <div className="App">
      <h1>Contact App</h1>

      <div className="formElement">
        <label name="firstName">First name</label>
        <input
          type="text"
          id="fname"
          required
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />
      </div>

      <div className="formElement">
        <label name="lastName">Last name</label>
        <input
          type="text"
          id="lname"
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
      </div>

      <div className="formElement">
        <label name="email">Email Address</label>
        <input
          type="email"
          id="email"
          required
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </div>

      <button onClick={addToList}>Save contact</button>
      <a href="/contact">View Contact</a>
    </div>
  );
};
