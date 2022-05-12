import React from 'react'
import {AiOutlineGithub} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {MdOutlineAlternateEmail} from 'react-icons/md'
import {AiOutlineInstagram} from 'react-icons/ai'
import './Contact.css'


const Contact = () => {
    return (
      <footer id='contact'>
        <div className='contacts'>
          <a href='https://github.com/urielrosario' target='_blank' rel="noopener noreferrer"><AiOutlineGithub/></a>
          <a href='https://www.linkedin.com/in/uriel-rosario-0b0b861b5/' target='_blank' rel="noopener noreferrer"><AiOutlineLinkedin/></a>
          <a href='mailto: urielrosario1010@gmail.com' target='_blank' rel="noopener noreferrer"><MdOutlineAlternateEmail/></a>
          <a href='https://www.instagram.com/urielrosariooo/' target='_blank' rel="noopener noreferrer"><AiOutlineInstagram/></a>

        </div>
      </footer> 
    )
}
export default Contact