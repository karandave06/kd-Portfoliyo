import React, { useState } from 'react'
import './contact.scss'
import shake from '../../../public/assets/shake.svg'

export default function Contact() {

  const [massage,setmassage] = useState(false)

    
    const handelSubmit =(e)=>{
      e.preventDefault();
      setmassage(true)
    }
  return (
    <div className='contact' id='contact'>

    <div className="left">
      <img src={shake} alt="" />
    </div>

    <div className="right">
      <h2>Contact</h2>

      <form onSubmit={handelSubmit} >
        <input type="text" placeholder='Email' />
        <textarea placeholder='massage'></textarea>
        <button type='submit' >Send</button>
        {massage && <span>Thanks, I'll replay ASAP :) </span>}
      </form>
    </div>
   
    </div>
  )
}
