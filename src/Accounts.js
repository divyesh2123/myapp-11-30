import axios from 'axios';
import React, { useEffect, useState } from 'react'
import authFetch from './axiosbase/custom';

export default function Accounts() {

    const [data,setData] = useState([]);

    useEffect(()=>{

        let token = JSON.parse(localStorage.getItem("tokennew"));
        authFetch.get("/accounts"

        ).then(y=>{

            console.log(y.data);
        }).catch(y=>{
          console.log(y);
        })


    },[])
  return (
    <div>Accounts</div>
  )
}
