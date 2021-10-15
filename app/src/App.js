import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Section from './components/Section';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {

  return ( 
    <Router>
      <Header />
      <Nav/>
      <Section />
      <Footer />
    </Router>
  );
}
export default App;
