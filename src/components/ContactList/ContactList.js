import React, {useState,useEffect} from 'react';
import Axios from 'axios';
import "./ContactList.css";
import { BackendApi } from '../../config';
require('dotenv').config();

export const ContactList= () =>{

    const [contactList, setContactList] = useState([]);


    useEffect(()=>{
        Axios.get(`${BackendApi}/read`).then(   (response) => {
                // console.log(response.data);
                setContactList(response.data)
            });
    }, []);

    return(
        <div>
            <h1>Contact List</h1> 
            <a href="/">Add new contact</a>
            <div className="spacer"></div>

            {contactList.map((val, key) => {
                return <div className="contactBox" key={val._id}> 
                            <h6> Firstname: {val.contactFirstname} </h6>
                            <h6> Lastname: {val.contactLastname} </h6>
                            <h6> Email: {val.contactEmail}</h6>
                    </div>
            })}
        </div>
    );
    
     }