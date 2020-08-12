import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 } from "react-router-dom";
import Home from './Home';
import Register from './Register';
import './App.css';

function App() {
  return (
    <Router>
     <Switch>
       <Route exact path='/'>
         <Home/>
       </Route>
       <Route path='/register'>
         <Register/>
       </Route>
     </Switch>
   </Router>

  );
}

export default App;
