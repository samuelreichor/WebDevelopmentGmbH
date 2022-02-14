import React, { useRef } from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Link} from 'react-router-dom';
import Impressum from '../rights/Impressum'

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
                    <img  src={logo}  alt="logo" className="w-28 cursor-pointer "/>
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
                    <span className="hover-footer my-1">Über mich</span>
                    <span className="hover-footer my-1">Kursinfos</span>
                    <span className="hover-footer my-1">Anstehende Kurse</span>
                    <span className="hover-footer my-1">Anmelden</span>
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-white uppercase mt-4 md:mt-0 mb-2">Langweiliges</span>
                    <Link to="/">Impressum</Link>
                    <Link to="/">Datenschutz</Link>
                    <Link to="/">Haftungsbeschluss</Link> 
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