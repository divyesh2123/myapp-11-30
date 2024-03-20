import React, { useContext } from 'react'
import LanguageContext from './Language/LanguageContext'

export default function LanForm() {
  const {data}=  useContext(LanguageContext);

  const obj = {

     "en" : {

        "firstName" : "firstName",
        "lastName" : "lastName"
     },

     "hi" : {

        "firstName": "p name",
        "lastName": "l name"
     }
  }
  return (
    <div>
        
        <label>
    {obj[data].firstName}

   

        </label>

        <input type='text'/>

        <label>
    {obj[data].lastName}

   

        </label>

        <input type='text'/>
    </div>
  )
}
