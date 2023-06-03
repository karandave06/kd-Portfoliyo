import React, { useState } from 'react'
import Intro from './Components/intro/Intro'
import Topbar from './Components/topbar/Topbar'
import Portfoliyo from './Components/Portfoliyo/Portfoliyo'
import Work from './Components/work/Work'
import Testimonial from './Components/testimonials/Testimonial'
import Contact from './Components/Contact/Contact'
import './app.scss'
import Menue from './Components/menue/Menue'

export default function App() {

  const [open, setopen] = useState(false)
  return (
    <div className='app'>

  <Topbar open={open} setopen={setopen} />

  <Menue open={open} setopen={setopen}/>
  <div className="section">
    <Intro />
    <Portfoliyo />
    <Work />
    <Testimonial />
    <Contact />
    
  </div>
    </div>
  )
}
