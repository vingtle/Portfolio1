import React from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <p>I am a Freelance Junior Web Developer Full Stack</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2024 VingtL3. All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Github</p>
            <p>Linkedin</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
