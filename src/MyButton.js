import React from 'react'

export default function MyButton(props) {
  return (
    <>
    {props.name}    {props.eyeColor} {props.age}
    <button>{props.children}</button>
    </>
  )
}

MyButton.defaultProps ={
    name: "Rahul",
    eyeColor: "d",
    age: "45",
}
