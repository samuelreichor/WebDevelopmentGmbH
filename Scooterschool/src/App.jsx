import { Navbar, Welcome, Footer, Aboutme, Contact, Information } from "./components";

const App = () => {

  return(
    <div className='min-h-screen'>
      <div className="gradient-bg-welcome">
        <Navbar/>
        <Welcome />
      </div>
      <Aboutme/>
      <Information/>
      <Contact/>
      <Footer/>
    </div>   
  )
  
}

export default App
