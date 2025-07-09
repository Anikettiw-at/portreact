// import React from 'react';
// import AnchorLink from 'react-anchor-link-smooth-scroll';
// import './Hero.css'; 
// import profile_img from '../../assets/profile_img.jpg'
// const Hero = () => {
//     return (
//         <div  id="home" className='hero'>
//         <img src={profile_img} alt="" />
//         <h1><span>I'm Aniket Tiwari,</span> full stack developer based in India</h1>
//         <p>I am a MERN stack developer from IET Lucknow,passionate about building complete web applications from frontend UI to backend logic</p>
//         <div className="hero-action">
//         <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'> Connect with me </AnchorLink>  </div>
//         <div className='hero-resume'>My resume</div>
//        </div>
//         </div>
//     );
// };

// export default Hero;



import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Hero.css'; 
import profile_img from '../../assets/profile_img.jpg';
import resume from '../../assets/Resume3.pdf'; // Keep in src/assets

const Hero = () => {
    return (
        <div id="home" className='hero'>
            <img src={profile_img} alt="Profile" />
            <h1><span>I'm Aniket Tiwari,</span> full stack developer based in India</h1>
            <p>I am a MERN stack developer from IET Lucknow, passionate about building complete web applications from frontend UI to backend logic</p>
            <div className="hero-action">
                <div className='hero-connect'>
                    <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
                </div>
                <a 
                    href={resume} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='hero-resume'
                >
                    My resume
                </a>
            </div>
        </div>
    );
};

export default Hero;
