import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.jpg'
const About = () => {
  return (
    <div id='about' className='about'>
       <div className="about-title">
           <h1>About me</h1>
         <img src={theme_pattern} alt="" />
    </div>
    <div className='about-sections'>
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am a dedicated Full Stack Developer and B.Tech Computer Science student at IET Lucknow. I blend creative UI/UX with rock-solid backend systems to deliver end to end 
                    web application.My toolkit spans HTML5, CSS3, Javascript, React, Node.js, Express.js, and MongoDB
                </p>
                <p></p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:"50%"}} /></div>
               <div className="about-skill"><p>React JS</p> <hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>Javascript</p> <hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>Node JS</p> <hr style={{width:"57%"}} /></div>
                 <div className="about-skill"><p>Express JS</p> <hr style={{width:"55%"}} /></div>
                  <div className="about-skill"><p>MongoDB</p> <hr style={{width:"65%"}} /></div>
                   <div className="about-skill"><p>MERN Stack</p> <hr style={{width:"70%"}} /></div>

            </div>
        </div>
    </div>
    {/* <div id="papa" className="about-achivements">
        <div className="about-achivement">
            <h1>1+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achivement">
            <h1>10+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achivement">
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
    </div> */}
    </div>
  )
}

export default About
