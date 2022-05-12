import React from 'react'
import './Projects.css'
import Quirky from '../../assets/quirkyquiz.png'
import Bane from '../../assets/Bane.png'
import Restuarants from '../../assets/restaurants.png'

const Project = () => {
    return (
        <section id='project'>
            <h2 className='title3'>Projects</h2>

            <div className='container portfolio_cont'>
                <article className='portfolio-item'>
                    <div className='portfolio-img'>
                        <img src={Quirky} alt='quirky quiz'/>
                    </div>
                    <h3>Quirky Quiz</h3>
                    <a  target='_blank' rel="noopener noreferrer" className='btn' href='https://github.com/urielrosario/quirky-quiz'>Github</a>
                    <a target='_blank' rel="noopener noreferrer" className='btn' href='https://quirkyquiz.herokuapp.com/'>Live Demo</a>
                </article>
                <article className='portfolio-item'>
                    <div className='portfolio-img'>
                        <img src={Bane} alt='RPG Game'/>
                    </div>
                    <h3>Bane of Olympus</h3>
                    <a target='_blank' rel="noopener noreferrer" className='btn' href='https://github.com/urielrosario/bane-of-olympus'>Github</a>
                    <a target='_blank' rel="noopener noreferrer" className='btn' href='https://baneofolympus.herokuapp.com/'>Live Demo</a>
                </article>
                <article className='portfolio-item'>
                    <div className='portfolio-img'>
                        <img src={Restuarants} alt='restaurant game'/>
                    </div>
                    <h3>Restuarants Near Me</h3>
                    <a target='_blank' rel="noopener noreferrer" className='btn' href='https://github.com/urielrosario/Restaurants-Near-Me'>Github</a>
                    <a target='_blank' rel="noopener noreferrer" className='btn' href='https://scashmore.github.io/Restaurants-Near-Me/'>Live Demo</a>
                </article>

            </div>

        </section>
    )
}
export default Project