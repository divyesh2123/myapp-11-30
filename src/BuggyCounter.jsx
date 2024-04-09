import React, { useState } from 'react'

export default function BuggyCounter() {

    const [counter,setcounter] = useState(0);

    const handleCounter = ()=>{

        setcounter(counter+1);
    }

    if(counter ==3)
    {
        throw new Error("dddd");
    }

  return (

    <div style={{"color": "red"}} onClick={handleCounter}>{counter}</div>
  )
}
