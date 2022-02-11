import React, { useRef } from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import './Footer.css'
import logo from '../img/logo.png';

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
                    <div class="container-footer">
                        <div class="icontel-footer icon-footer"><BsFillTelephoneForwardFill/></div>
                        <div class="telefonnummer-footer"><p className='contact-footer my-2'>+436604082187</p></div>
                        <div class="email-footer"><p className='contact-footer my-2'>kontakt@scooterschool.online</p></div>
                        <div class="iconmail-footer icon-footer"><MdEmail/></div>
                        </div>
                       
                </div>
                <div class="flex flex-col">
                    <span className="font-bold text-white uppercase mt-4 md:mt-0 mb-2">Wichtiges</span>
                    <span className="hover-footer my-1">Über mich</span>
                    <span className="hover-footer my-1">Kursinfos</span>
                    <span className="hover-footer my-1">Anstehende Kurse</span>
                    <span className="hover-footer my-1">Anmelden</span>
                </div>
                <div class="flex flex-col">
                    <span className="font-bold text-white uppercase mt-4 md:mt-0 mb-2">Langweiliges</span>
                    <span className="hover-footer my-1">Impressum</span>
                    <span className="hover-footer my-1">AGB</span>
                    <span className="hover-footer my-1">Datenschutz</span>
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