import React from 'react'
import './portfoliyolist.scss'

const Portfoliyolist = ({title,active,Setselected,id}) => {
  return (

    <li className={active ? 'portfoliyolist active' : 'portfoliyolist'} onClick={()=>{Setselected(id)}}>

      {title}

    </li>
  )
}

export default Portfoliyolist
