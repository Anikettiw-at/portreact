import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'  
import user_icon from '../../assets/user_icon.svg'  


const  Footer= () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                {/* <img src={footer_logo} alt="" /> */}
                <p>I am a full stack web developer from Lucknow, Uttar pradesh with 2 year of experience </p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    {/* user icon jo enail ke andar dikh rha hai wohai  */}
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder="Enter your email" />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
         <hr />
         <div className="footer-bottom">
            <p className="footer-bottom-left">©️ 2025 Aniket Tiwari  All rights are reserved </p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect With me </p>
            </div>
         </div>
    </div>
  )
}

export default Footer
