// App.js

import React from "react";
import "./styles.css";
import Navbar from './components/common/Navbar';
import Welcome from './components/home/Welcome';
import AboutMe from './components/home/Aboutme';
import Information from './components/home/Information';
import ScrollToTop from "./components/scrolling/ScrollToTop"
import Footer from './components/common/Footer';
import Impressum from './components/rights/Impressum'
import Datenschutz from './components/rights/Datenschutz'
import Haftungsbeschluss from './components/rights/Haftungsausschuss'
import Kontakt from './components/home/ContactForm'
import ContactForm from "./components/home/ContactForm";
import Anmelden from "./components/home/Anmelden";
import Termine from "./components/home/Termine"


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';







export default function App() {
 

  return (
    <Router>
      <ScrollToTop/>
      <div>
        <Navbar />
        
      </div>
      <div>
        <Switch>
          <Route exact path="/">
          <Welcome/>
          <AboutMe/>
          <Information/>
          <Termine/>
          <Anmelden/>
          <Kontakt/>
          </Route>
          <Route path="/about">
            <AboutMe />
          </Route>
          <Route path="/kurse">
            <Information/>
          </Route>
          <Route path="/termine">
            <Termine />
          </Route>
          <Route path="/contact">
            <ContactForm />
            </Route>
          <Route path="/anmelden">
            <Anmelden />
          </Route>
          
          <Route path="/impressum">
            <Impressum />
          </Route>
          <Route path="/datenschutz">
            <Datenschutz />
          </Route>
          <Route path="/haftung">
            <Haftungsbeschluss />
          </Route>
          
        </Switch>
       
      </div>
      <div>
    <Footer/>
      </div>
    </Router>   
  );
}