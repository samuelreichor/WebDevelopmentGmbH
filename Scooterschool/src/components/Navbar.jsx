import React, { useState, useEffect } from "react";
import background2 from '../img/Welcome-34.png';
import { Link } from 'react-router-dom';

import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';




import logo from '../img/logo.png';




const Navbar = () => {
    const [click, setClick] = useState(false);


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    
    return (
        <nav className="z-10">
        <div className="navbar">
                <div className="navbar-container container ">
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <img  src={logo}  alt="logo" className="w-28 cursor-pointer "/>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                          
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className=" nav-item">
                <Link to='/aboutMe' className='nav-links' onClick={closeMobileMenu}>
                    Über mich
                </Link>
                </li>
                <li className=" nav-item">
                <Link to='/kurse' className='nav-links' onClick={closeMobileMenu}>
                    Kurse
                </Link>
                </li>
                <li className="nav-item">
                <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                    Kontakt
                </Link>
                </li> 
                <li>
               
                  <Link to='/kursAnmeldung' className=''>
                  <button class="bubbly-button py-2 px-7 mx-4">Anmelden</button>
                  </Link>
               
                    </li>   
                </ul>
                </div>
        </div>

        
        </nav>  
      
    );
}

export default Navbar;