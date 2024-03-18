import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Accounts() {

    const [data,setData] = useState([]);

    useEffect(()=>{

        let token = JSON.parse(localStorage.getItem("tokennew"));
        axios.get(" https://real-pear-fly-kilt.cyclic.app/accounts",{

        headers: {
            'Content-Type': "application/json",
            Authorization: `Bearer ${token.jwtToken}` 
            
        }

        }).then(y=>{

            console.log(y.data);
        })


    },[])
  return (
    <div>Accounts</div>
  )
}
