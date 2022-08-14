import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
const About = () => {  
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>            
            <span>
              This project was built for the purpose of bridging the gap between
              artisans and electronic commerce. A platform exclusive to members
              of the handicraft industry would generate revenue and benefits
              for craftsmen without the interference of private corporations 
            </span>
          </div>
          <div className="aboutSectionContainer2">            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
