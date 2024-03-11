import axios from 'axios';
import React, { useState } from 'react'

export default function Registatation() {

    const [data,setData]= useState({
        "firstName" : "",
    "title": "",
    "lastName":"",
    "email":"",
    "password":"",
    "confirmPassword":"",
    "acceptTerms":true
  
    });

    const handleInput = (e)=>{

    
        if(e.target.type =="checkbox")
        {
            setData({...data,[e.target.name]: e.target.checked})
        }
        else
        {
            setData({...data,[e.target.name]: e.target.value})
        }
     

    }

    const handleSubmit = (e)=>{

        axios.post(" https://real-pear-fly-kilt.cyclic.app/accounts/register",data).then(y=>{

        console.log(y.data);
        })

    }
  return (
    <div>
        <input type='text' name='firstName' onChange={handleInput}/>
        <input type='text' name='title'  onChange={handleInput}/>
        <input type='text' name='lastName'  onChange={handleInput}/>
        <input type='text' name='email'  onChange={handleInput}/>
        <input type='text' name='password'  onChange={handleInput}/>
      <input type='text' name='confirmPassword'  onChange={handleInput}/>
          <input type='checkbox' name='acceptTerms'  onChange={handleInput}/>

          <button onClick={handleSubmit}>Save</button>
    
    </div>
  )
}
