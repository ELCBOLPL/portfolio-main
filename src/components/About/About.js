import React from "react";
import {
  AboutContent,
  AboutDetailsContainer,
  AboutImage,
  AboutImageContainer,
  StyledAbout,
} from "../styles/About.styled";
import { SectionHeading, SectionTitle, SectionTitleNosotros } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";
import myImage from "../../assets/invita2.png";
// import downloadIcon from "../../assets/icons/download-icon.svg";
// import resume from "../../assets/resume.pdf";

const Nosotros = () => {
  return (
    <StyledAbout id="about">
      <SectionHeading dark="true" mb="3rem">
        <SectionTitleNosotros dark="true">
          Nosotros
        </SectionTitleNosotros>
      </SectionHeading>
      <AboutContent>
        <AboutImageContainer>
          <AboutImage src={myImage} />
        </AboutImageContainer>
        <AboutDetailsContainer>
          <SectionTitleNosotros>
          Estamos invitando asistir a nuestros eventos 
          </SectionTitleNosotros>
         
        </AboutDetailsContainer>
      </AboutContent>
    </StyledAbout>
  );
};

export default Nosotros;
