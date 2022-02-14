import {Home} from "./components"
import {Datenschutz} from "./components"
import {AGB} from "./components"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {

  return(
    <div className="wrapper">
        <Home/>
          <Router>
            <Switch>
              <Route path="/" component={Home}/>
              <Route path="/datenschutz">
                <Datenschutz/>
              </Route>
            </Switch>
          </Router>
    </div>

    
      
 
  )
  
}

export default App
