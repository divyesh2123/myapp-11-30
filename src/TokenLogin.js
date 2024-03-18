import axios from 'axios'
import React, { useState } from 'react'

export default function TokenLogin() {

   const [data,setData] = useState({
        email: "",
        password : ""
    })

const handleInput = (e)=>{

    setData({...data,[e.target.name]: e.target.value})

}

const handleSubmit = (e)=>{

    e.preventDefault();

    axios.post(" https://real-pear-fly-kilt.cyclic.app/accounts/authenticate",data)
    .then(y=>{

        localStorage.setItem("tokennew",JSON.stringify(y.data));
    })

}

  return (
    <form onSubmit={handleSubmit}>

        <input type='text' name="email" onChange={handleInput} />
        <input type='text' name="password" onChange={handleInput} />
        
        <input type='submit' value="save"/>
    </form>
  )
}
