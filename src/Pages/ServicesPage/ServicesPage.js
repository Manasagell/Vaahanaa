import React, { useState } from 'react';

import classes from './Servicespage.module.css'



const Services = () => {
  
  return (
    <div className={classes.servicesctn}>
      <div><h3>General Service</h3>
      <p>This isn't your standard regular service. Whether your vehicle needs conventional, high mileage,
         synthetic blend or full synthetic oil, vaahanaa general service is a comprehensive preventive maintenance to check, change, inspect, flush, 
         fill and clean essential systems and components of your vehicle. </p>
        <p>vaahanaa partner engineers go over a visual checklist to diagnose potential problems and plan any upcoming manufacturer recommended maintenance. </p>
        </div>
        <div><h3>Health Checkup</h3>
      <p>A thorough check-up of your vehicle on the spot by our Smart service engineers to provide a clear and detailed report regarding the present condition of your Bike. The report includes - status, durability, reliability and lifespan forecast of every major component.
        We do assessment of around 30 major checkpoints in a bike to ensure very comprehensive health report.</p>
        </div>
         <div> <h3>Breakdown</h3>
         <p>In case of break down vehicle owners has the option to select the nearest best available engineer or ask their regular engineer to look at the vehicle.</p> </div>
         <div> <h3> Second opinion </h3>
          <p>Majority of the vehicle owners do not share the details of the detachable products in their vehicle. Example – Engine; batter etc., vaahanaa helps the vehicle owners registered with us to store such important data. 
            Vehicle owners can choose this option when the engineers opt for batter replacement; service status of the vehicle etc., our trained engineers will conduct a detailed study and give report.</p></div>
            <div><h3>Polishing</h3>
            <p>Polish can help to extend the life of the bike's paint or finish, and it can also improve the bike's appearance. Our engineers suggest or directly you may select the polish option for your vehicle.</p></div>
            <div><h3>Replacement</h3>
            <p>We offer genuine and easy access to the spare parts. Our centers provide you all the necessary parts: brake pads, tyres, chains, cables and gears at minimal cost. </p>
         </div>
         
    </div>
  );
};

export default Services;
