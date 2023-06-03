import React from 'react'
import './intro.scss'
import Tony from '../../../public/assets/Tony-Stark.png'
import down from '../../../public/assets/down.png'
import Typewriter from 'typewriter-effect';




export default function Intro() {
  return (
    <div className='intro' id='intro'>

<div className="left">

<div className="imageContainer">
    <img src={Tony} alt="" />
</div>

</div>
<div className="right">
    <div className="wrapper">
        <h2>Hi There I'm</h2>
        <h1>Karan Dave</h1>
        <h3><span>
        <Typewriter
  options={{
    strings: ['Programer', 'Fullstack Daveloper','Designer'],
    autoStart: true,
    loop: true,
  }}
/>

        </span>

        </h3>
    </div>
    <a href="#portfoliyo">

        <img src={down} alt="" />
    </a>
</div>

    

    </div>
  )
}
