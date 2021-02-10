import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Error from "./components/pages/Error";
import Portfolio from "./components/pages/Portfolio"
import Navigation from "./components/Navigation";

const theme = {
  background: "#19181A",
  primary: "#479761",
  secondary: "#CEBC81",
  tertiary: "#A16E83",
  quaternary: "#B19F9E",
  pFont: "'Lora', serif",
  hFont: "'Ubuntu Condensed', sans-serif",
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${theme.background}
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.hFont};
    color: ${theme.primary};
  }

  p {
    font-family: ${theme.pFont};
    color: ${theme.primary};
  }
`

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navigation />
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/about" component={About}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/contact" component={Contact}/>
            <Route component={Error}/>
        </Switch>
      </ThemeProvider> 
    </BrowserRouter>
  );
}