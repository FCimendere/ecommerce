import React from 'react'
import { AiFillInstagram, AiOutlineTwitter, AiFillGithub  } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2024 FCM Electronics All rights reserved</p>
      <p className='icons'> 
        <AiFillInstagram/>
        <AiFillGithub />
        <AiOutlineTwitter/>
      </p>
    </div>
  )
}

export default Footer
