// App.js

import React from "react";
import "./styles.css";
import Navbar from './components/common/Navbar';
import AboutMe from './components/home/Aboutme';
import Information from './components/home/Information';
import Kurse from './components/home/Kurse';
import Footer from './components/common/Footer';
import Impressum from './components/rights/Impressum'
import Datenschutz from './components/rights/Datenschutz'
import Haftungsbeschluss from './components/rights/Haftungsausschuss'
import ContactForm from "./components/home/ContactForm";
import Anmelden from "./components/home/Anmelden";
import ScrollToTop from "./components/scrolling/ScrollToTop"
import Welcome from "./components/home/Welcome";
import Kontakt from "./components/home/ContactForm"
//import AppHome from "./views/home";

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
          <Route path="/" exact >
            <Welcome/>
            <AboutMe/>
            <Information/>
            <Kurse/>
            <Anmelden/>
            <Kontakt/>
          </Route>
          <Route path="/about">
            <AboutMe />
          </Route>
          <Route path="/kurse">
            <Information />
          </Route>
          <Route path="/termine">
            <Kurse />
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