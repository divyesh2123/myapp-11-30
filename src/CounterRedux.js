import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Decrement, Increment } from './action/counteraction';

export default function CounterRedux() {

   const data= useSelector(y=>y.CounterRedux);

   const dis = useDispatch();

   const inc = ()=>{

    dis(Increment())
   }

   const dec = ()=>{

    dis(Decrement())

   }

  return (
    <div>{data}
    
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
    </div>
  )
}
