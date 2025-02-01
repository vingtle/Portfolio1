import React from 'react'
import './About.css'



const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am a Freelance Junior Web Developer Full Stack with a strong foundation in HTML, CSS, JavaScript, and React. Actively Enhancing Skills in UI/UX.</p>
                <p> With a strong foundation in modern frameworks, databases, and API development, I am driven by a passion for clean code, performance optimization, and intuitive user experiences.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>Node JS</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>MySQL, SQL</p><hr style={{width:"50%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>EDUCATIONS</h1>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>PROJECTS COMPLETED</h1>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>EXPERIENCES</h1>
        </div>
      </div>
    </div>
  )
}

export default About
