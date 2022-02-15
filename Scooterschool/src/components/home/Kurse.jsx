import React from 'react';
import './Kurse.css';
import {BsCalendarDate} from 'react-icons/bs'
import {GoLocation} from 'react-icons/go'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {FaChild} from 'react-icons/fa'
import {GiPriceTag} from 'react-icons/gi'


const Kurse = () => {
    return (
    <div id="kurse" className='terminInit '>
            <h1 className="informationh1 information-border">Anstehende Kurse</h1>
        <div className="flex-container">      
            <div className="content-left">
                <div className = "termine-content curser-pointer">
                        <div>
                            <h2>Kurs für Anfänger</h2>
                            <h3>23.02.2021, Lissfeld</h3>
                        </div>
                    <div className="content-termine-left">
                        <div class="container-termine">
                            <div class="icon-section iconstyle">
                                <BsCalendarDate></BsCalendarDate> 
                            </div>
                            <div class="text-section textstyle">
                                <p>coming soon</p>
                            </div>
                            <div class="icon-section1 iconstyle">
                                <AiOutlineClockCircle></AiOutlineClockCircle>
                            </div>
                            <div class="text-section1 textstyle">
                                <p>8:00-10:00</p>
                            </div>
                            <div class="icon-section2 iconstyle">
                                <GoLocation></GoLocation> 
                            </div>
                            <div class="text-section2 textstyle">
                                <p>Hausleitnerweg 105, 4020 Linz</p>
                            </div>
                            <div class="icon-section3 iconstyle">
                                <FaChild></FaChild>
                            </div>
                            <div class="text-section3 textstyle">
                                <p>max. 20 Teilnehmer</p>
                            </div>
                            <div class="icon-section4 iconstyle">
                                <GiPriceTag></GiPriceTag>
                            </div>
                            <div class="text-section4 textstyle">
                                <p>40 €</p>
                        </div>
                    </div>
                <button type = "button" className = "btn btn-pink anmelden-btn">Anmelden</button> 
            </div>
        </div>       
    </div>
        
    <div className="content-right">
        <div className = "termine-content curser-pointer">
            <div>
                <h2>Kurs für Anfänger</h2>
                <h3>23.02.2021, Lissfeld</h3>
            </div>
                <div className="content-termine-left">
                    <div class="container-termine">
                        <div class="icon-section iconstyle">
                            <BsCalendarDate></BsCalendarDate> 
                        </div>
                        <div class="text-section textstyle">
                            <p>coming soon</p>
                        </div>
                        <div class="icon-section1 iconstyle">
                            <AiOutlineClockCircle></AiOutlineClockCircle>
                        </div>
                        <div class="text-section1 textstyle">
                            <p>8:00-10:00</p>
                        </div>
                        <div class="icon-section2 iconstyle">
                            <GoLocation></GoLocation> 
                        </div>
                        <div class="text-section2 textstyle">
                            <p>Hausleitnerweg 105, 4020 Linz</p>
                        </div>
                        <div class="icon-section3 iconstyle">
                            <FaChild></FaChild>
                        </div>
                        <div class="text-section3 textstyle">
                            <p>max. 20 Teilnehmer</p>
                        </div>
                        <div class="icon-section4 iconstyle">
                            <GiPriceTag></GiPriceTag>
                        </div>
                        <div class="text-section4 textstyle">
                            <p>40 €</p>
                        </div>
                
                        </div>
                        
                        <button type = "button" className = "btn btn-pink anmelden-btn">Anmelden</button>  
                        
            
                </div>
            </div>
        </div>
    </div>
    <br></br>
    <br></br>
</div>

   
    
   
    
    )
}

export default Kurse;