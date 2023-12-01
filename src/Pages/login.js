import React, { useState } from "react";
import './Style/login.css'
import Logo from './Pictures/logo.png'
import { Button } from "antd";
import Validation from './LoginValidation';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login(){
    const[values, setValues] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate();
    const [errors,setErrors] = useState({})
  

    const handleSubmit = (event) =>{
        event.preventDefault();
        setErrors(Validation(values));
        const encodedPassword = btoa(values.password); 
        if(errors.email === "" && errors.password === ""){
            axios.post('http://localhost:8081/login', { ...values, password: encodedPassword })
            .then(res => {
                if(res.data === "Success"){
                    navigate('/home')
                }else{
                    alert("wrong username or password");
                }
            })
            .catch(err => console.log(err));
        }
    }
    return(
        <div className="center">
           <img src={Logo}></img> 
           
            <div>
                <form className="form" >
                       <div className="txt_field">
                       <span > {errors.email}</span>
                        <input type="email" placeholder="Enter Email" name='email'onChange={(event)=>setValues({...values, email:event.target.value})}
                       />
                         
                       </div>
                       <div className="txt_field">
                       <span>{errors.password}</span>
                        <input type="password" placeholder="Enter Password" name='password'onChange={(event)=>setValues({...values, password:event.target.value})}
                         />
                        
                       </div>
                       <div className="pass">
                       <Button  onClick={handleSubmit}>Login </Button>
                       </div>
                </form>
            </div>
        </div>
    )
}

export default Login