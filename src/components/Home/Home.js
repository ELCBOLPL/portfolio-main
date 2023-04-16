import React from "react";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import {
  StyledHome,
  Title,
  Social,
  Socials,
  // Quote,
} from "../styles/Home.styled";
import "./style.css";
import projectIcon from "../../assets/icons/project-icon.svg";
import aboutIcon from "../../assets/icons/about-me.svg";
import { IconContext } from "react-icons";
import { GrLinkedinOption } from "react-icons/gr";
import { GoMarkGithub } from "react-icons/go";
import { FaEnvelope } from "react-icons/fa";


const Home = () => {
  return (
    <IconContext.Provider value={{ size: "1rem" }}>
      <StyledHome id="home">
      
        <SectionHeading>
        <Title>Carolain e Ivan</Title></SectionHeading>
        
     
        
          {/* <CountdownTimer targetDate={dateTimeAfterThreeDays} /> */}
        
      </StyledHome>
    </IconContext.Provider>
  );
};

export default Home;
