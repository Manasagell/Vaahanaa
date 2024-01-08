import { NavLink } from "react-router-dom";
import classes from './Navbar.module.css';
import React, { useState } from 'react';


const Navbar=()=>{

    return(
      
      <div className={classes.navbar}>
      <ul className={classes.navbarlist}>
        <li>
          <NavLink to="/" className={classes.navbarlink}>
           Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={classes.navbarlink} >
            About
          </NavLink >
        </li>
        
        <li>
        <NavLink
            to="/services"
            className={classes.navbarlink}>
            Services
          </NavLink>
          
       </li>
        
        <li>
          <NavLink to="/Contact" className={classes.navbarlink}>
            Contact
          </NavLink>
        </li>

        <li>
          <NavLink to="/PrivacyPolicies" className={classes.navbarlink}>
            PrivacyPolicy
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
   
   export default Navbar;
