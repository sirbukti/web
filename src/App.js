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
    <Router basename='/web'>
     <Switch>
       <Route exact path='/'>
         <Register/>
       </Route>
       <Route path='/home'>
         <Home/>
       </Route>
     </Switch>
   </Router>

  );
}

export default App;
