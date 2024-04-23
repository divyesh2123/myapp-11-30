import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserRequest } from './action/userAction';

export default function UserReducer() {

   const data = useSelector(y=>y.user);

   console.log(data);

   const dis = useDispatch();

   useEffect(()=>{

    dis(UserRequest())

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(y=>y.json())
    .then(y=> {
        dis(UserSuc(y));
    }).catch(y=>{

        dis(UserFail(y));
    })

   },[])

   console.log(data);
  return (
    <div>UserReducer</div>
  )
}
