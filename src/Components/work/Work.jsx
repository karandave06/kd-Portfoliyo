import React, { useState } from 'react'
import './work.scss'
import Mobile from '../../../public/assets/mobile.png'
import arrow from '../../../public/assets/arrow.png'

export default function Work() {

  const handelClick = (way)=>{

    way === "left" ? setslide(slider > 0 ? slider-1 : 2) : setslide(slider <data.length -1?slider+1 : 0);

  }

  const [slider , setslide]  = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Mobile Application",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];
  return (
    <div className='work' id='work'>

    <div className="slider" style={{transform:`translateX(-${slider * 100}vw)`}}>
{   data.map(d=>(

  
  <div className="container">
        <div className="item">
          <div className="left">
 <div className="left-container">
  <div className="img-container">
    <img src={d.icon} alt="" />
  </div>
  <h2>{d.title}</h2>
  <p>{d.desc}</p>

  <span>Project</span>


 </div>
          </div>
          <div className="right">
<img src="https://assets.materialup.com/uploads/4ea2c585-6e1b-4e72-bee6-634c75c583a1/preview.jpg" alt="" />
          </div>
        </div>
      </div>

)) 
}

    </div>
    <img src={arrow} className='left arrow' alt=""  />
    <img src={arrow} className='right arrow' alt=""/>

    </div>
  )
}
