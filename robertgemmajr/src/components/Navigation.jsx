import React from "react";
import { NavLink } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown'
 
export default function Navigation() {
    return (
       <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavDropdown title="Portfolio">
            <NavLink to="/portfolio">Portfolio</NavLink>
          </NavDropdown>
       </div>
    );
}