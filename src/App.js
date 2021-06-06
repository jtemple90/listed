import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Switch, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage.js';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Switch>
      <Route path='/' exact component={LandingPage}/>
      <Route path='/listings' exact/>
      <Route path='/dashboard' exact/>
      <Route path='/login' exact/>
    </Switch>
    </div>
  );
}

export default App;
