import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavHeader from "./nav/navigation"
import Home from "./home"
import About from "./pages/about"
import Contact from "./pages/contact"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
      <NavHeader/>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/about" component={About} />
          <Route  path="/contact" component={Contact} />
        </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
