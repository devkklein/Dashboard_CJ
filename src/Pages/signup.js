import React, { useState } from "react";
import './Style/login.css'
import Logo from './Pictures/logo.png'
import { Button } from "antd";

import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    })
    const navigate = useNavigate();



    const handleSubmit = (event) => {
        event.preventDefault();



        axios.post('http://localhost:8081/signup', values)
            .then(res => navigate('/login'))
            .catch(err => console.log(err));

    }
    return (
        <div className="center">
            <img src={Logo}></img>

            <div>
                <form className="form" >
                    <div className="txt_field">

                        <input type="name" placeholder="Enter Username" name='name' onChange={(event) => setValues({ ...values, name: event.target.value })}
                        />

                    </div>
                    <div className="txt_field">

                        <input type="email" placeholder="Enter Email" name='email' onChange={(event) => setValues({ ...values, email: event.target.value })}
                        />

                    </div>
                    <div className="txt_field">

                        <input type="password" placeholder="Enter Password" name='password' onChange={(event) => setValues({ ...values, password: event.target.value })}
                        />

                    </div>
                    <div className="pass">
                        <Button onClick={handleSubmit}>Signup </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup