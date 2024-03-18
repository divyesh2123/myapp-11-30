import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Accounts() {

    const [data,setData] = useState([]);

    useEffect(()=>{

        let token = JSON.parse(localStorage.getItem("tokennew"));
        axios.get(" https://real-pear-fly-kilt.cyclic.app/accounts"

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
