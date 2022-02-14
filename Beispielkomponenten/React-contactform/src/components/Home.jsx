import react from 'react'
import Link from 'react-router-dom'
const Home = () =>{
    return(
        <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/Datenschutz">Datenschutz</Link></li>
        <li><Link to="/AGB">AGB</Link></li>
      </ul>
  </div>
    )
}

export default Home;