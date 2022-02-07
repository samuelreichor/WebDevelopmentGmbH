import { Navbar, Welcome, Footer, Aboutme, Contact, Information } from "./components";
import background from './img/Welcome-55.png';

const App = () => {

  return(
    <div className='min-h-screen min-w-screen relative top-0 '>
      <div className="">     
        <Navbar/>   
      </div>
      <Welcome/>
      
      <Aboutme/>
      <Information/>
      <Contact/>
      <Footer/>
      </div> 
  ); 
}

export default App
