import React from 'react'

import twitter from '../icons/twitter.svg'
import youtube from '../icons/youtube.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF , } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='footerContainer'>
        <div className='Quick-links'>
            <small>Quick links</small>
            <small>Services</small>
            <small>Our Policies</small>
            <small>Social </small>
            <small>Our App</small>
        </div>
        <div className='links'>
            <div>
                <small>FAQ's</small>
                <small>About Us</small>
                <small>Contact Us</small>
            </div>
            <div>
                <small>Order Medicine</small>
                <small>Lab Tests</small>
                <small>Doctor Consultation</small>
            </div>
            <div>
                <small>Privacy Policy</small>
                <small>Terms and Conditions</small>
                <small>Cancellation Policy</small>
            </div>
            <div>
                <div className='footerIcon'>
                    <FontAwesomeIcon icon={faFacebookF} />
                    <img src={twitter} alt="twitter" srcset="" className='twitter'/>
                    <img src={youtube} alt="youtube" srcset="" className='youtube'/>
                </div>
                <small>Need Help?</small>
                <small>+91 9876543210</small>
            </div>
            <div>
                <button className='QuickLink-button'>Download on the <br/>App Store</button>
                <button className='QuickLink-button'>Get it on <br/>Google Play</button>
            </div>
        </div>
        <div className='horizontal-line'></div>
        <div className='copyRight'>
            <p>&copy;Company. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer