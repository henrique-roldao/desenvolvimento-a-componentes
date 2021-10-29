import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import Products from '../Products';
import Contact from '../Contact';
import ContactView from '../ContactView';

function Section(){
  return (
    <section id="section" className="container mt-3">
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/about">
            <About></About>
          </Route>

          <Route path="/products">
            <Products></Products>
          </Route>

          <Route exact path="/contact">
            <Contact></Contact>
          </Route>

          <Route exact path="/contact/view">
            <ContactView></ContactView>
          </Route>
        </Switch>
    </section>
  );
} 
export default Section;