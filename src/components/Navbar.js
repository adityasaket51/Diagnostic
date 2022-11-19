import React from 'react'
import doctor from '../icons/doctor.jpg'
import medicine from '../icons/medicine.jpg'
import twitter from '../icons/twitter.svg'
import youtube from '../icons/youtube.svg'
import cart from '../icons/cart.svg'

// import { MdZoomOut } from 'react-icons/md';
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF , } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  return (
    <div>
        <nav className='navbarContainer'>
            <div className='navbarBox'>
                <img src={doctor} alt="doctor icon" className='Nicone' />
                <p>Consult a Doctor</p>
            </div>
            <div className='navbarBox'>
                <img src={medicine} alt="medicine" className='Nicone'/>
                <p>Order Medicine</p>
        </div>
            <div className='navbarBox Diagnostic'>
            <img src={medicine} alt="medicine" className='Nicone'/>
                <p>Book for Diagnostic</p>
            </div>
            <div className='navbarBox'>
                <FontAwesomeIcon icon={faFacebookF} />
                <img src={twitter} alt="twitter" srcset="" className='twitter'/>
                <img src={youtube} alt="youtube" srcset="" className='youtube'/>
                {/* <i class="bi bi-twitter"></i> */}
                {/* <FontAwesomeIcon icon="fa- fa-twitter" /> */}
                {/* <FaBeer /> */}
            </div>
        </nav>
        <div className='Logo'>
            <div>
                <h2 className='font-weight-bold'><strong>Logo</strong></h2>
            </div>
            <div className='subLogo'>
                <button type='button' className='btn btn-outline-primary'><strong>LogIn|Signup</strong></button>
                {/* <p>Cart Icone</p> */}
                <img src={cart} alt="cart" srcset="" className='cartIcone'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar