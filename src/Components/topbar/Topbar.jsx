import React from 'react'
import './topbar.scss'


const Topbar = ({open, setopen}) => {
  return (
    <div className={"topbar " + (open && "active")} id='topbar'>
     <div className="wrapper">
      <div className="left">
<a href="#intro" className='logo'>Karan Dave</a>

<div className="itemcontainer">

<i className="fa-solid fa-phone icon"></i>
<span> +91 9429584270</span>
</div>

<div className="itemcontainer">

<i className="fa-solid fa-envelope icon"></i>
<span> karandave503@gmail.com</span>
</div>
      </div>
      <div className="right">
<div className="hamburgar" onClick={()=>{setopen(!open)}}>
  <span className="line1"></span>
  <span className="line2"></span>
  <span className="line3"></span>
</div>
      </div>
     </div>
    </div>
  )
}

export default Topbar
