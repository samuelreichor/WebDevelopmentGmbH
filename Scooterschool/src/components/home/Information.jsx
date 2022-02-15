import React from "react";
import './Information.css'
import { Link } from "react-router-dom";

const newInformation = () => {
    return (
        <div class="flex-container-information">
        <div class="flex-items-information">
        <h1 className="information-h1">Kursinfos</h1>
        </div>
        <div class="flex-items-information">
            <h3 className="information-h3">Ort</h3>
            <div className="information-description">
            <p className="information-description">
                Die Kurse werden im Winter in der Sporthalle Lissfeld stattfinden. 
                Diese Skate-Halle befindet sich in Linz in der Nähe vom Bindermichel Tunnel und bietet auf über 1000 
                m<sup>2</sup> alles was ein freestyle Herz begeehrt. 
            </p>
            </div>
            
                <a href="https://www.livasport.at/sportparks/sportpark-lissfeld/" target='_blank'>
         
                    <button type = "button" className = "btn btn-white information-btn">Mehr Information</button>
                </a>
        </div>
        <div class="flex-items-information">
        <h3 className="information-h3">Ablauf</h3>
        <div className="information-description">
        <p className="information-description">Das schönste an einem Hobby ist schnelle Erfolge zu erzielen und dabei Spaß zu haben. 
            Daher wird der Kurs in 3 Teile aufgebaut:</p>
                    <ul>
                        <li>1. Aufwärmen, kennenlernen</li>
                        <li>2. Alte Tricks üben</li>
                        <li>3. Neue Tricks lernen</li>
                    </ul>
                    <p className="information-description">So können super schnell neue Tricks gelernt werden. </p>
                    <br></br>
                    <br></br>
        </div>
        
        </div>
        <div class="flex-items-information">
        <h3 className="information-h3">Anmeldung</h3>
        <div className="information-description">
            <p className="information-description">
            Weiter unten auf der Website oder wenn Sie auf den Knopf unterhalb drücken, können Sie sich 
            oder Ihr Kind anmelden. Nach einer erfolgreichen Anmeldung werden Sie eine Email mit 
            den Kursdaten erhalten.
            </p>
        </div>
        <Link to="/anmelden">
                    <button type = "button" className = "btn btn-white information-btn">Anmelden</button>
        </Link>
        </div>
    </div>
       

    )
}

export default newInformation;