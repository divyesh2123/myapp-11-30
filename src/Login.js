import React, { useState } from 'react'

export default function Login() {
  const [data,setData] = useState({firstName:"",lastName:""});

  console.log("ddd");
  const handleInputFirstName = (e)=>{
   // data.firstName = "Dd"
    setData({...data,"firstName": e.target.value});
  }

  const handleInputLastName = (e)=>{

    setData({...data,"lastName": e.target.value});
  }
  const handleSubmit = (e)=>{
    e.preventDefault();

    console.log(data);

  }
  return (
    <div>
        
        <form  onSubmit={handleSubmit}>

        <input type='text' name='lastName' onChange={handleInputLastName}/>
            <input type='text' name='firstName' onChange={handleInputFirstName}/>
           
        
            <input type='submit' value="save"/>
        </form>
    </div>
  )
}
