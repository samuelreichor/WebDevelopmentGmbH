import React, { useState } from "react";
import {HiMenuAlt4} from 'react-icons/hi';
import { AiOutlineClose} from 'react-icons/ai';
import background from '../img/Welcome-55.png';
import background2 from '../img/Welcome-34.png';
import background3 from '../img/Welcome-22.png';


import logo from '../img/logo.png';

const NavbarItem = ({title, classProbs}) => {
    return(
     <li  className={`mx-4 curser-pointer navbarhover ] ${classProbs}`}>
         {title}
     </li>
     );
}



const Navbar = () => {
    const [toggleMenu, setToggleMenu] =  React.useState(false);
    return (
        <nav className="h-screen bg-cover bg-center z-0" style={{ backgroundImage: `url(${background2})` }}>
            <div className="w-full flex md:justify-center justify-between items-center p-4 navbar-bg">
                <div className="md:flex-[0.5] flex-initial justify-center items-center">
                    <img  src={logo}  alt="logo" className="w-28 cursor-pointer "/>
                </div>
            
            <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial cursor-pointer ">
                {["Über mich", "Kurse", "Kontakt"].map((item, index) =>(
                   <NavbarItem  key={item + index} title={item}/>
                ))}
                
                <button class="bubbly-button py-2 px-7 mx-4">Anmelden</button>
            </ul>
            <div className="flex relative">
                    {toggleMenu
                     ? <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
                     : <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)}  />
                    }
                    {toggleMenu && (
                        <ul
                            className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md navbar-glassmorphism text-white animate-slide-in">
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
            </div>
            
                    <div className="w-full flex flex-col items-center translate-y-56">

                        <h2 className="fontstyleh2 ">Scootering is Awesome</h2>
                        <h1 className="fontstyleh1 typewriter">Stunt Scooter Kurse in Linz</h1>
                    </div>
                    

            
        </nav>
        
    );
}

export default Navbar;