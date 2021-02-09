import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Error from "./components/pages/Error";
import Portfolio from "./components/pages/Portfolio"
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/about" component={About}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/contact" component={Contact}/>
            <Route component={Error}/>
        </Switch>
      </div> 
    </BrowserRouter>
  );
}