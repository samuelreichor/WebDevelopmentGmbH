import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";


import aboutMeImg from '../../assets/Placeholder.jpg';

const Aboutme = () => {
    return (
        
    <div id="aboutme" className = "about-wrapper">
      <div className = "about-left">
        <div className = "about-left-content curser-pointer">
          <div>
            <div className = "shadow">
              <div className = "about-img content-center">
                <img src = {aboutMeImg} alt = "about image"/>
              </div>
            </div>

            <h2 className="curser-pointer">Samuel Reichör</h2>
            <h3>19, aus linz</h3>
          </div>

        <ul className = "icons curser-pointer">
            <li><FaFacebookF /></li>
            <li><FaInstagram></FaInstagram></li>
            <li><FaYoutube></FaYoutube></li>
            
          </ul>


          
        </div>
        
      </div>

      <div className = "about-right">
        <h1>Hey<span>!</span></h1>
        
        <div className = "about-btns">
          <Link to="/contact">
          <button type = "button" className = "btn btn-pink">Kontakt</button>
          </Link>
          <Link to="/anmelden">
          <button type = "button" className = "btn btn-white">Anmelden</button>
          </Link>
          
          
        </div>

        <div className = "about-para">
          
          <p> Vor 8 Jahren als ich noch die Volkschule besuchte, verliebte ich mich in, 
              Stunt-Scootering. Schnell entwickelte sich 
              dieses neue Hobby zur Leidenschaft und Lifestyle. 2017 hatte ich dann den ersten Sponsor-Vertrag 
              bei Rideside unterschrieben und bei einem Contest in der Linzer Sporthalle erreichte ich 
              Platz 4 in Österreich.</p>

            <p>
            Heute will ich meine Leidenschaft an jüngere weitergeben und Menschen dazu bewegen niemals aufzugeben 
            . 
            </p>
        </div>

      </div>
      
    </div>
    

    )
}

export default Aboutme;