import React from 'react'
import './About.css'
import Computer from '../../assets/computer.jpg'

const About = () => {
    return (
        <section id='about'>
            <h1 className='title2'>About Me</h1>

            <div className='about-container'>
                <div className='about-me-image'>
                    <img src={Computer} alt='computer'/>
                </div>

                <div className='about-content'>
                     <h3>Exceptionally creative and dependable Software Developer with stellar customer service record and superb work ethic. Knowledgeable in a wide variety of computer languages and disciplines. Highly adept at conveying complex technical information to a variety of professional audiences in a clear and understandable manner.</h3>
                </div>
                

            </div>
        </section>
    )
}
export default About