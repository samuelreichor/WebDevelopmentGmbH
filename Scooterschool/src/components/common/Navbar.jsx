import React, { useState, useEffect } from "react";

import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.png';


const Navbar = () => {
    const [click, setClick] = useState(false);


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    
    return (
        <nav className="z-10">
        <div className="navbar">
                <div className="navbar-container container ">
                    <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                        <img  src={logo}  alt="logo" className="w-28 cursor-pointer "/>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                          
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className=" nav-item">
                <a href="#Aboutme" className='nav-links' onClick={closeMobileMenu}>
                    Über mich
                </a>
                </li>
                <li className=" nav-item">
                <a href="#information" className='nav-links' onClick={closeMobileMenu}>
                    Kurse
                </a>
                </li>
                <li className="nav-item">
                <a href="#termine" className='nav-links' onClick={closeMobileMenu}>
                    Termine
                </a>
                </li> 
                <li className="nav-item">
                <a href="#contact" className='nav-links' onClick={closeMobileMenu}>
                    Kontakt
                </a>
                </li> 
                <li>
               
                  <a href="#anmelden">
                  <button  href="#anmelden" class="bubbly-button py-2 px-7 mx-4">Anmelden</button>
                  </a>
               
                    </li>   
                </ul>
                </div>
        </div>

        
        </nav>  
      
    );
}

export default Navbar;