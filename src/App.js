
import './App.css';
import Navbar from './components/layout/Navbar';
import NotFound from './components/pages/NotFound';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  
} from "react-router-dom";

import Footer from './components/layout/Footer';
import Contact from './components/pages/Contact';
// import 'bootstrap/dist/css/bootstrap.min.css';


import Home from './components/pages/Home';
import Impd from './components/pages/Impd'
import Schemes from './components/pages/Schemes';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.js'

import Mandi from './components/pages/Mandi'
import Helplines from './components/pages/Helplines'


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/mandi" component={Mandi} /> 
        <Route exact path="/Impd" component={Impd} /> 
        <Route exact path="/help" component={Helplines} /> 
          
        
        <Route exact path="/home" component={Home} />
        
        
       
        <Route exact path="/schemes" component={Schemes} />
        <Route exact path="/contactus" component={Contact} />
        {/* <Route exact path="/Rabi" component={Rabi} />  */}
        {/* <Route exact path="/Khareef" component={Khareef} />  */}
        <Route component={NotFound} /> 
      </Switch>
      {/* <Footer/> */}
    </div>
  </Router>
  );
}

export default App;
