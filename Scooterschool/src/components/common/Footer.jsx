import React, { useRef } from 'react';

import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import {Link} from 'react-router-dom'


import './Footer.css'
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
<div className="footer relative pt-1 ">
    <div className="container footer-border mx-auto px-6">

        <div className="sm:flex  sm:mt-8">
            <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                <div className="flex flex-col">
                    <span className="">
                    <Link to="/">
                    <img  src={logo}  alt="logo" className="w-28 cursor-pointer "/>
                    </Link>
                    
                    </span>
                    <div className="container-footer">
                        <div className="icontel-footer icon-footer"><BsFillTelephoneForwardFill/></div>
                        <div className="telefonnummer-footer"><p className='contact-footer my-2'>+436604082187</p></div>
                        <div className="email-footer"><p className='contact-footer my-2'>kontakt@scooterschool.online</p></div>
                        <div className="iconmail-footer icon-footer"><MdEmail/></div>
                        </div>
                       
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-white uppercase mt-4 md:mt-0 mb-2">Wichtiges</span>
                    <Link className="hover-footer my-1" to="/about">Über mich</Link>
                    <Link className="hover-footer my-1" to="/kurse">Kurs Info</Link>
                    <Link className="hover-footer my-1" to="/termine">Termine</Link> 
                    <Link className="hover-footer my-1" to="/contact">Kontakt</Link> 
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-white uppercase mt-4 md:mt-0 mb-2">Langweiliges</span>
                    <Link className="hover-footer my-1" to="/impressum">Impressum</Link>
                    <Link className="hover-footer my-1" to="/datenschutz">Datenschutz</Link>
                    <Link className="hover-footer my-1" to="/haftung">Haftungsbeschluss</Link> 
                </div>
            </div>
        </div>
    </div>
    <div className="container mx-auto px-6">
        <div className="mt-16 footer-border flex flex-col items-center">
            <div className="sm:w-2/3 text-center py-6">
                <p className="">
                    © 2022 ScooterSchool
                </p>
            </div>
        </div>
    </div>
</div>


    )
}

export default Footer;