import './mainPage.css';
import {Registeration} from './Registeration';
import {Login} from './login';
import React,{useState} from 'react';

function App() {
   const [formHere,setformHere]=useState('loggedIn');

   const toggleForm=(formChange)=>{
    setformHere(formChange);
   }
  return (
    <div className='mainPage'>
   {formHere==='loggedIn' ?<Login onFormSwitch={toggleForm} />:<Registeration onFormSwitch={toggleForm} />}
    </div>
  );

}

export default App;
