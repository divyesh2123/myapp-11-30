import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductItem from './ProductItem';
export const Product = () => {

    const [data,setData] = useState([]);

    useEffect(()=>{
    
    axios.get("https://fakestoreapi.com/products")
    .then(y=>{
        setData(y.data);
    });

    },[])

    console.log(data);
  return (
    <>
        {
            data.map((value,index)=>{

    return (<ProductItem data={value} 
        key={index}
        
       
        />)

            })
        }
    
    </>
  )
}
