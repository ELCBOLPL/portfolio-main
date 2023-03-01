import React from "react";
import { Parallax } from "react-parallax";
import parralaxImage from "../../assets/sibelly7.jpg";
import { ParallaxContainer, ParallaxText } from "../styles/Parallax.styled";
import { SectionTitleNosotros } from "../styles/SectionHeading";

const ParallaxComponent = () => {
  return (
    <Parallax bgImage={parralaxImage} strength={-200} style={{ width: "100%" }}>
      <ParallaxContainer>
        <SectionTitleNosotros>
               Acompañanos en este dia<br />
            tan especial para nosotros.
        </SectionTitleNosotros>
      </ParallaxContainer>
    </Parallax>
  );
};

export default ParallaxComponent;
