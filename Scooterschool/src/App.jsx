import { Navbar, Footer, Welcome, Aboutme, ContactForm, Kurse, Information, Anmelden } from "./components";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';



const App = () => {

  return(
    <Router>  
      <Navbar/>
      <Welcome/> 
      <Aboutme/>
      <Information/>
      <Kurse/>
      <Anmelden/> 
     <ContactForm/>
     <Footer/>   
      </Router>
  ); 
}

export default App
