import React, { useEffect,useState } from 'react'
import Portfoliyolist from '../portfoliyolist/Portfoliyolist';
import './portfoliyo.scss'

import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";


const Portfoliyo = () => {

  const [selected,Setselected] = useState('featured');
  const [data, setdata] = useState([])

  const list = [
    {
      id: 'featured',
      title: 'Featured'
    },

    {
      id: 'web-app',
      title: 'Web App'
    },

    {
      id:'mobile-app',
      title: 'Mobile App'
    },
    {
      id: 'design',
      title: 'Design'
    },
     
    {
      id: 'content',
      title: 'Content'
    }
  ]
useEffect(()=>{
  switch(selected){

    case "featured":
      setdata(featuredPortfolio)
      break;

      case "web-app":
      setdata(webPortfolio)
      break;



      case "mobile-app":
      setdata(mobilePortfolio)
      break;



      case "design":
      setdata(designPortfolio)
      break;


      case "content":
      setdata(contentPortfolio)
      break;

      default:
        setdata(featuredPortfolio)

     


  }
})

  // const link = "https://source.unsplash.com/random/300x200";
  return (
    <div className='portfoliyo' id='portfoliyo'>
    <h1>Portfoliyo</h1>

    <ul>

   {list.map((item)=>(
    <Portfoliyolist title={item.title} active = {selected === item.id} Setselected={Setselected} id={item.id}/>
   ))}
    </ul>

    <div className="container">

{data.map(d=>(

      <div className="item">        
        <img src={d.img} alt="" />
        <h3>{d.title}</h3>
      </div>
))}

    </div>

    </div>
  )
}

export default Portfoliyo
