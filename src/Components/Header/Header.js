import React from 'react';
import Navbar from '../Navbar/Navbar';
import {NavLink} from "react-router-dom";
import classes from "./Header.module.css";
import logo from '../../Images/Logo.jpeg';
const Header=() =>{
    return (
     <div className={classes.header}> 
     <div className={classes.header_image}>
        <NavLink to="/">
          <img src={logo} alt="logo" className={classes.logo} />
        </NavLink> 
     </div>
        <div className={classes.header_content}><Navbar/></div>
        </div>
    );
  }
  
  export default Header;