import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MyUsers from './MyUsers'
import { Home } from './Home'
import MyData from './MyData'

export default function Test() {
  return (
    <Routes>

        <Route path='/' element={<Home></Home>}/>
        <Route path='/myuser' element={<MyUsers></MyUsers>}/>
        <Route path='/ma' element={<MyData></MyData>}/>
    </Routes>
  )
}
