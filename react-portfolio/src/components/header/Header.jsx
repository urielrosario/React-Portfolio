import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Me from '../../assets/me.jpg'

const Header = () => {
    return (
       <header id='home'>
           <div className='logo'>
               <img src={Logo} width='160px'  alt="logo" />
           </div>
           <div className='header_container'>
               <h5>Hello I'm</h5>
               <h1 className='headH1'>Uriel Rosario</h1>
               <h5 className='light-blue'>Jr Software Engineer</h5>
               <div className='me-card'>
                   <img className='me' src={Me} alt='profile'/>
               </div>
           </div>
           
       </header>
    )
}
export default Header