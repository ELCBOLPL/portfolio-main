import {
  CardWrapper,
  CardImage,
  CardTextWrapper,
  CardTextDate,
  CardTextTitle,
  CardTextBody,
  CardStatWrapper,
  CardStats,
  LinkText
} from "./CardStyles";
import Tilt from "react-parallax-tilt";
import { Image } from "react-bootstrap-icons";

export const Card = ()  => {
  return (
    <Tilt>
      <CardWrapper>
        <CardImage background={Image} />
        <CardTextWrapper>
          <CardTextDate>Desea Ayudarnos </CardTextDate>
          <CardTextTitle></CardTextTitle>
          <CardTextBody>
            Este espacio es para quien desea ayudarnos economicamente 
          </CardTextBody>
        </CardTextWrapper>
        </CardWrapper>
    </Tilt>
  );
};
