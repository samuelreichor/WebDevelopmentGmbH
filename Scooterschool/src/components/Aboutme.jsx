import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import aboutMeImg from '../img/Placeholder.jpg';

const Aboutme = () => {
    return (
        
    <div className = "about-wrapper">
      <div className = "about-left">
        <div className = "about-left-content">
          <div>
            <div className = "shadow">
              <div className = "about-img">
                <img src = {aboutMeImg} alt = "about image"/>
              </div>
            </div>

            <h2 className="curser-pointer">Samuel Reichör</h2>
            <h3>19, aus linz</h3>
          </div>

          <ul className = "icons">
            <li href="https://www.instagram.com/samisstreetplaza/"><FaFacebookF ><a href="https://www.instagram.com/samisstreetplaza/"></a></FaFacebookF></li>
            <li><FaInstagram></FaInstagram></li>
            <li><FaYoutube></FaYoutube></li>
            <li><FaGithub></FaGithub></li>
          </ul>
        </div>
        
      </div>

      <div className = "about-right">
        <h1>Heyo<span>!</span></h1>
        <h2>Hier erzähle ich wer ich bin :)</h2>
        <div className = "about-btns">
          <button type = "button" class = "btn btn-pink">Kontakt</button>
          <button type = "button" class = "btn btn-white">Anmelden</button>
        </div>

        <div className = "about-para">
          <p>Mein Name ist Samuel Reichör, 19 Jahre jung und ich  wohne in der Nähe von Linz. </p>
          <p> Vor ungefähr 8 Jahren als ich noch die Volkschule besuchte, verliebte ich mich in, 
              die damals noch sehr neue  Trendsportart, Stunt-Scootering. Schnell entwickelte sich 
              dieses neue Hobby zur Leidenschaft und Lifestyle. 2017 hatte ich dann den ersten Sponsor-Vertrag 
              bei Rideside unterschrieben und bei einem Contest in der Linzer Sporthalle erreichte ich 
              Platz 4 in Österreich.</p>

            <p>
            Heute will ich meine Leidenschaft an jüngere weitergeben und Menschen dazu bewegen niemals aufzugeben 
            und somit haben ich und Freund die Scooterschool ins Leben gerufen. 
            </p>
        </div>
        
      </div>
    </div>


    )
}

export default Aboutme;