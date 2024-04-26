import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getUser from './asycaction/userasyncAction';

export default function MyUser() {

    const data = useSelector(y=>y.myuser);
    const dis = useDispatch();

    useEffect(()=>{


        dis(getUser())
    },[])
  return (
    <div>MyUser</div>
  )
}
