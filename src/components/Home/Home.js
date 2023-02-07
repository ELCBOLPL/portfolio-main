import { StyledButton } from "../styles/Button.styled";
import {
  Name,
  StyledButtonsContainer,
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
// import { countdown } from "../Form/countdown";
// import { transform } from "framer-motion/";

const Home = () => {


  return (
    <IconContext.Provider value={{ size: "1rem" }}>
      <StyledHome id="home">
        <Name>Acompañanos a nuestra Boda</Name>
        <Title>IVAN Y CAROLAIN</Title>
        <p className="responsive">
          Te mostramos <span className="change-text"></span>{" "}
          <span className="responsive">F</span>
          <span className="responsive">o</span>
          <span className="responsive">t</span>
          <span className="responsive">o</span>
          <span className="responsive">s</span>
        </p>
        <StyledButtonsContainer>
          <StyledButton
            icon={projectIcon}
            to="projects"
            smooth={true}
            duration={0}
            delay={0}
            spy={true}
            spyThrottle={0}
            exact="true"
            offset={-50}
          >
            <span>Ubicaciones</span>
          </StyledButton>
          <StyledButton
            icon={aboutIcon}
            secondary="true"
            content="B"
            to="about"
            smooth={true}
            duration={0}
            delay={0}
            spy={true}
            spyThrottle={0}
            exact="true"
            offset={-50}
          >
            <span>Nosotros</span>
          </StyledButton>
        </StyledButtonsContainer>
        {/* <Line /> */}
        
        <Socials>
          <Social
            href="mailto:jerichobantiquete@gmail.com"
            target="https://wa.me/15551234567"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </Social>
          <Social
            href="https://github.com/monciego"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GoMarkGithub />
          </Social>
          <Social
            href="https://www.linkedin.com/in/jericho-bantiquete-450541179/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrLinkedinOption />
          </Social>
        </Socials>
                
      </StyledHome>
      
    </IconContext.Provider>
    
  );
};

export default Home;
