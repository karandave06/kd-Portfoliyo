import React from 'react'
import './menue.scss'

const Menue = ({open,setopen}) => {
  return (
    <div className={"menue   " + (open && "active")}>
      <ul>
        <li onClick={()=>setopen(false)}><a href="#intro">Home</a></li>
        <li onClick={()=>setopen(false)}><a href="#portfoliyo">Portfoliyo</a></li>
        <li onClick={()=>setopen(false)}><a href="#work">Work</a></li>
        <li onClick={()=>setopen(false)}><a href="#testimonial">Testimonial</a></li>
        <li onClick={()=>setopen(false)}><a href="#contact">Contact</a></li>
      </ul>
    </div>
  )
}

export default Menue
