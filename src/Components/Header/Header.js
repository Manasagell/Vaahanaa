import React ,{useState} from 'react';
import Navbar from '../Navbar/Navbar';
import {NavLink} from "react-router-dom";
import classes from "./Header.module.css";
import logo from '../../Images/Logo.jpeg';
import { FaBars } from 'react-icons/fa'; 

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

    return (
     <div className={classes.header}> 
     <div className={classes.header_image}>
        <NavLink to="/">
          <img src={logo} alt="logo" className={classes.logo} />
        </NavLink> 
     </div>
        <div className={classes.header_content}>
        <button className={classes.mobileMenuButton} onClick={toggleMobileMenu}>
          <FaBars/>
        </button><Navbar/>
        </div>
        
        </div>
    );
  }
  
  export default Header;