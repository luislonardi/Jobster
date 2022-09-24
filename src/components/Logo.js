import img from '../assets/images/logo.svg'
import React from 'react'

const Logo= ()=> {
  return (
    <div>
    <img src={img} alt="jobster logo" className='logo'/>
    </div>
  )
}


export default Logo