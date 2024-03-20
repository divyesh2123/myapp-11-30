import logo from './logo.svg';
import './App.css';
import LanguageContext from './Language/LanguageContext';
import { useState } from 'react';
import NavCustom from './NavCustom';
import LanForm from './LanForm';

function App() {

  const [data,setdata] = useState('en');
  return (
    <LanguageContext.Provider value={{data,setdata}}>
   
    <NavCustom/>
    <LanForm/>

  
    </LanguageContext.Provider>
  );
}

export default App;
