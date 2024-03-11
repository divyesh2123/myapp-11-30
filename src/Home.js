import React, { useEffect, useState } from 'react'

export const Home = () => {

 const [data,setData]= useState([]);


 useEffect(()=>{

  fetch("https://jsonplaceholder.typicode.com/posts").then(y=>y.json())
  .then(y=>{

    setData(y)
  })

 },[])

  return (
    <> {

      data.map((v)=>{

        return <div>{v.id}</div>
      })
    }
    
    </>
  )
}
