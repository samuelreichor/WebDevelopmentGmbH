import React, { useState, useEffect } from "react";
import { Anchor, Drawer} from 'antd';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

import logo from '../../assets/logo.png';

const { Link } = Anchor;


const Navbar = () => {
    const [click, setClick] = useState(false);


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    
    return (
        <nav className="z-10">
        <div className="navbar">
                <div className="navbar-container container ">
                    <Link href="#home" className='navbar-logo' onClick={closeMobileMenu}>
                        <img  src={logo}  alt="logo" className="w-28 cursor-pointer "/>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                          
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className=" nav-item">
                <Link href="aboutme" className='nav-links' onClick={closeMobileMenu}>
                    Über mich
                </Link>
                </li>
                <li className=" nav-item">
                <Link href="information" className='nav-links' onClick={closeMobileMenu}>
                    Kurse
                </Link>
                </li>
                <li className="nav-item">
                <Link href="kurse" className='nav-links' onClick={closeMobileMenu}>
                    Termine
                </Link>
                </li> 
                <li className="nav-item">
                <Link href="contact" className='nav-links' onClick={closeMobileMenu}>
                    Kontakt
                </Link>
                </li> 
                <li>
               
                  <Link href="anmelden" className=''>
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