import { Navbar, Footer, Aboutme, Contact, Information } from "./components";


const App = () => {

  return(
    <div className='min-h-screen min-w-screen relative top-0 '>
      <Navbar/>       
      <Aboutme/>
      <Information/>
      <Contact/>
      <Footer/>
      </div> 
  ); 
}

export default App
