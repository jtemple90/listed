import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';
import {Switch, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage.js';
import Listings from './pages/Listings/Listings';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/LoginPage/Login';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Switch>
      <Route path='/' exact component={LandingPage}/>
      <Route path='/listings' exact component={Listings}/>
      <Route path='/dashboard' exact component={Dashboard}/>
      <Route path='/login' exact component={Login}/>
    </Switch>
    {/* <Footer/> */}
    </div>
  );
}

export default App;
