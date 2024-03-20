import React from 'react'
import Child1 from './Child1'

export default function Master() {

  const data = {
    name: "John Doe",
  }
  return (
    <div>
      <Child1 d={data}/>
    </div>
  )
}
