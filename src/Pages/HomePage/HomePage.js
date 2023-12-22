import React from 'react';
import classes from './Homepage.module.css'

const Home = () => {
  return (
    <div className={classes.homectn}>
      <h1>Welcome to Our Website</h1>
     <h3 className={classes.h3}>The Company</h3
     ><p>Welcome to VAAHANAA, part of TRIBN SOFTWARE PRIVATE LIMITED. We aim to be the owner’s choice, by providing high levels of service, the number one name in maintenance of vehicles.<br></br>
Vaahanaa is a platform that connects smart service engineer and the vehicle owner. Our goal is to improve the service standards of service engineers associated with us and vehicle ownership experience for customers in India.
</p>
<h3>
  The Vision</h3>
  <p> Our vision is to perk up the lifestyles of simple mechanics by taking them under our wings. The mechanics train under able hands thereby qualifying to become smart service engineers[SSE].

At vaahanaa, we understand that effective communication skills coupled with art of fostering professional relationships with clients would go a long way in generating profitable returns on their business. This is inculcated in them plus advisory to adopt banking practices and take insurance policies.
 The company assists vehicle owners in keeping their vehicles in good condition by offering alerts on kilometers run, issues service reminders, assists customers with insurance, offers preventive maintenance services and much more. 
</p>
    </div>
  );
  };

export default Home;
