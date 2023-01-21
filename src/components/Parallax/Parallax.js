import React from "react";
import { Parallax } from "react-parallax";
import parralaxImage from "../../assets/pexels.jpg";
import { ParallaxContainer, ParallaxText } from "../styles/Parallax.styled";

const ParallaxComponent = () => {
  return (
    <Parallax bgImage={parralaxImage} strength={-200} style={{ width: "100%" }}>
      <ParallaxContainer>
        <ParallaxText>
               Acompañanos en este dia<br />
            tan especial para nosotros.
        </ParallaxText>
      </ParallaxContainer>
    </Parallax>
  );
};

export default ParallaxComponent;
