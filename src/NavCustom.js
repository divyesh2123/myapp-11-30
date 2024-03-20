import React, { useContext } from 'react'
import LanguageContext from './Language/LanguageContext'

export default function NavCustom() {

  const {data,setdata} =  useContext(LanguageContext);

  const handleSelect = (e)=>{
    setdata(e.target.value);
  }
  return (
    <div>

        <select onChange={handleSelect}>
            <option value="en">English</option>
            <option value="hi">Hindi</option>

        </select>

    </div>
  )
}
