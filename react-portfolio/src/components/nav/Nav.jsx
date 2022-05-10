import React, {useState} from "react";
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsClipboardCheck} from 'react-icons/bs'
import {AiOutlineContacts} from 'react-icons/ai'
import './Nav.css'


const Nav = () => {
    const [clickedNav,setClickedNav]= useState('#')
    return (
        <nav>
            <a href="#" onClick={()=> setClickedNav('#')} className={clickedNav === '#' ? 'active': ''}><AiOutlineHome/></a>
            <a href=" #about" onClick={()=> setClickedNav('#about')} className={clickedNav === '#about' ? 'active': ''}><AiOutlineUser/></a>
            <a href="#project" onClick={()=> setClickedNav('#project')} className={clickedNav === '#project' ? 'active': ''}><BsClipboardCheck/></a>
            <a href="#contact" onClick={()=> setClickedNav('#contact')} className={clickedNav === '#contact' ? 'active': ''}><AiOutlineContacts/></a>
        </nav>
    )
}

    
  
export default Nav;