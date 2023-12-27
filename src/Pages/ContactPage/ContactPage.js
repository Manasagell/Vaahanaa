import React from 'react';
import classes from './Contactpage.module.css'
import '../mediaquery.css'

const Contact=() =>{
    return (
      <div className='ContactContainer'>
        <div className={classes.CHeader}>
          <h1>Feel Free to Contact Us</h1> 
        </div>
        <div className={classes.Cmap}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2893.5287399263984!2d78.53843687698092!3d17.410668577402344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDI0JzQyLjUiTiA3OMKwMzInMzYuNSJF!5e0!3m2!1sen!2sin!4v1700583042757!5m2!1sen!2sin"
         width="100%" height="350" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div>
          <div className={classes.Cform}>
            <form action='#' method="POST" >
            <input type="text" name="username" placeholder="username" 
            autoComplete="off" required></input>
            <input type="Emai" name="Email" placeholder="Email" 
            autoComplete="off" required></input>
            <textarea name="Message" rows="6" columns="30"
            autoComplete="off" required></textarea>
            <input type="submit" placeholder="Send"></input>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
  export default Contact;
