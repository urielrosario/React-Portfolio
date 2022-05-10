import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'

const Header = () => {
    return (
       <header>
           <div>
               <img src={Logo} width='160px'  alt="logo" />
           </div>
           <div className='header_container'>
               <h5>Hello I'm</h5>
               <h1 className='headH1'>Uriel Rosario</h1>
               <h5 className='light-blue'>Jr Software Engineer</h5>
           </div>
       </header>
    )
}
export default Header