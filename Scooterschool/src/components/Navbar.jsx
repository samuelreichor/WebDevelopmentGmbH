import React, { useState } from "react";
import {HiMenuAlt4} from 'react-icons/hi';
import { AiOutlineClose} from 'react-icons/ai';

import logo from '../img/logo.png';

const NavbarItem = ({title, classProbs}) => {
    return(
     <li className={`mx-4 curser-pointer] ${classProbs}`}>
         {title}
     </li>
     );
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] =  React.useState(false);
    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-4 navbar-bg">
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
            <img  src={logo} alt="logo" className="w-32 cursor-pointer "/>
            </div>
            <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial ">
                {["Über mich", "Kurse", "Kontakt"].map((item, index) =>(
                   <NavbarItem  key={item + index} title={item}/>
                ))}
                <li className="text-black bg-[#48CFAD] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#fff]">
                    Anmelden
                </li>
            </ul>
            <div className="flex relative">
                    {toggleMenu
                     ? <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
                     : <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)}  />
                    }
                    {toggleMenu && (
                        <ul
                            className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in">
                            <li className="text-xl w-full my-2">
                                <AiOutlineClose  onClick={() => setToggleMenu(false)} />
                            </li>
                            {["Über mich", "Kurse", "Kontakt"].map((item, index) =>(
                                <NavbarItem key={item + index} title={item} classProbs="my-2 text-lg"/>
                            ))}
                        </ul>
                        )
                    }
            </div>
        </nav>
    );
}

export default Navbar;