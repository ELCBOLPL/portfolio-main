import React from 'react'
import styled from 'styled-components';
import Slider from '../../hooks/Projects/Slider';
import { Fade } from "react-awesome-reveal"

const ProjectsSlide = () => {
  return (
    <Container>
    <img src="https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="slider" />
    <div className='disc'>
    <h1>Description</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
    <a href='#'></a>
    </div>
    </Container>
    
  )
}
export default ProjectsSlide;

const Container = styled.div`
height: 10rem;
background-color: rgba(255, 255, 255, 0);
margin: 0 0.5rem;
padding : 0.5rem;
border-radius: 5px;
cursor: pointer;
overflow : hidden;
position: relative;
img{
  width: 100%;
height: 100%;
object-fit: cover;
transition: transform 400s ease-in-out;
}

.disc{
  position: absolute;
  right: 0;
  left: 0;
  bottom: -10rem;
  text-align: left;
  padding: 0.5rem;
  background: linear-gradient(rgba(0,0,0, 0.100), rgba(0,0,0, 0.80));
  transition: all 400s ease-in-out;
h1{
            font-size: 1rem;
        }
        p{
            width: 95%;
            font-size: 0.8rem;
            a{
                margin-left: 0.4rem;
                color: red;
            }
  }
}
  :hover > img{
    transform: scale(1.3);
    
  }


`