import React from 'react'
import './Projects.css'
import Quirky from '../../assets/quirkyquiz.png'

const Project = () => {
    return (
        <section id='project'>
            <h2 className='title3'>Portfolio</h2>

            <div className='container'>
                <article className='portfolio-item'>
                    <div className='portfolio-img'>
                        <img src={Quirky} alt='quirky quiz'/>
                    </div>
                    <h3>Quirky Quiz</h3>
                    <a className='btn' href='https://github.com/urielrosario/quirky-quiz'>Github</a>
                    <a className='btn-dark' href='https://quirkyquiz.herokuapp.com/'>Live Demo</a>
                </article>
                <article className='portfolio-item'>
                    <div className='portfolio-img'>
                        <img src={Quirky} alt='quirky quiz'/>
                    </div>
                    <h3>Bane of Olympus</h3>
                    <a className='btn' href='https://github.com/urielrosario/bane-of-olympus'>Github</a>
                    <a className='btn-dark' href='https://baneofolympus.herokuapp.com/'>Live Demo</a>
                </article>
                <article className='portfolio-item'>
                    <div className='portfolio-img'>
                        <img src={Quirky} alt='quirky quiz'/>
                    </div>
                    <h3>Item Title</h3>
                    <a className='btn' href='test.com'>Github</a>
                    <a className='btn-dark' href='test.com'>Live Demo</a>
                </article>

            </div>

        </section>
    )
}
export default Project