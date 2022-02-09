import { Navbar, Footer, Welcome, Aboutme, Contact, Information } from "./components";

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
      <Contact/>
      <Footer/>         
      </Router>
  ); 
}

export default App
