import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "../Style/usercount.css"
import { Button, Col, Row, Statistic } from 'antd';

function Usercount() {
    const [responseData, setResponseData] = useState('');
    
    useEffect(() => {
        axios.post("http://localhost:8081/usercount")
    .then(res=>{
        console.log(res.data);
        const integerData = parseInt(res.data, 10);
        
        setResponseData(integerData); 
    })
    .catch(error => {
        console.error('Fehler beim Abrufen der Daten:', error);
      });
    }, []); 
  return (
    <div className='user_count'>
      <Statistic className='size' title="Active Users" value={responseData} size="small" />
    
    </div>
  )
}


export default Usercount