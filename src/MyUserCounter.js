import React, { useRef } from 'react'

export default function MyUserCounter() {

   let ref= useRef(0);

   function handleClick() {

    alert('You clicked ' + ref.current.value + ' times!');
  }
  return (
    <div>
        
        <input type='text'  ref={ref} onChange={handleClick}/>
    </div>
  )
}
