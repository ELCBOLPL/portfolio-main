import styled from "styled-components";

export const SectionHeading = styled.div`
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${(props) => props.mb || "3rem"};
`;

export const SectionTitle = styled.h2`
  margin-bottom: 0.5rem;
  position: relative;
  font-size: 4rem;
  font-weight: 800;
  text-transform: capitalize;
  z-index: 1;
  color:  rgba(1,1,1,0.5);
  display: inline-block;
  border: 1px solid transparent;
  @font-face {
    font-family: 'glitterine';
    src: url('glitterine-webfont.eot');
    src: url('glitterine-webfont.eot?#iefix') format('embedded-opentype'),
         url('glitterine-webfont.woff2') format('woff2'),
         url('glitterine-webfont.woff') format('woff'),
         url('glitterine-webfont.ttf') format('truetype'),
         url('glitterine-webfont.svg#my_fontregular') format('svg');
   

}
font-family: glitterine;
  @media all and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 4.5rem;
  }
`;

export const SectionTitleNosotros = styled.text`

margin-bottom: 1.4rem;
	font-size: 3rem;
	text-align: center;
	line-height: 4.1;
	font-weight: 800;
	width: 5em;
  line-height: 0.9em;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1.5em;
  margin-top: calc(50vh - 1em);
	color: ${({ lightText }) => (lightText ? 'rgba(1,1,1,0.5)' : 'rgba(1,1,1,0.5)')};
	@font-face {
    font-family: 'glitterine';
    src: url('glitterine-webfont.eot');
    src: url('glitterine-webfont.eot?#iefix') format('embedded-opentype'),
         url('glitterine-webfont.woff2') format('woff2'),
         url('glitterine-webfont.woff') format('woff'),
         url('glitterine-webfont.ttf') format('truetype'),
         url('glitterine-webfont.svg#my_fontregular') format('svg');
   

}
font-family: glitterine;
  @media all and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 4.5rem;
  }
/* background: linear-gradient(to right, rgba(255, 215, 255, 0) 0%, rgba(225, 255, 255, 0.5) 20%, rgba(255, 255, 255, 0) 61%), linear-gradient(rgb(97, 183, 217) 52%, rgb(224, 246, 255) 60%, rgb(78, 99, 132) 61%); */
/* Create a conic gradient. */
	/* Double percentages to avoid blur (#000 10%, #fff 10%, #fff 20%, ...). */
	background: rgba(1,1,1,0.9);
	background-color: rgba(1,1,1,0.9);
	background: conic-gradient(
	  rgba(1,1,1,0.5) 16.666%, 
	  rgba(1,1,1,0.5) 16.666%, 
	  rgba(1,1,1,0.5) 33.333%, 
	  rgba(1,1,1,0.5) 33.333%, 
	  rgba(1,1,1,0.5) 50%, 
	  #8B9862 50%, 
	  #8B9862 66.666%, 
	  #476098 66.666%, 
	  #476098 83.333%, 
	  #A7489B 83.333%);
	
	/* Set thee background size and repeat properties. */
	background-size: 57%;
	background-repeat: repeat;
	
	/* Use the text as a mask for the background. */
	/* This will show the gradient as a text color rather than element bg. */
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent; 
	
	/* Animate the text when loading the element. */
	/* This animates it on page load and when hovering out. */
	animation: rainbow-text-animation-rev 0.5s ease forwards;
	cursor: pointer;

	&:hover {
  animation: rainbow-text-animation 0.5s ease forwards;
}
/* Move the background and make it larger. */
/* Animation shown when hovering over the text. */
@keyframes rainbow-text-animation {
  0% {
    background-size: 57%;
    background-position: 0 0;
  }
  20% {
    background-size: 57%;
    background-position: 0 1em;
  }
  100% {
    background-size: 300%;
    background-position: -9em 1em;
  }
}

/* Move the background and make it smaller. */
/* Animation shown when entering the page and after the hover animation. */
@keyframes rainbow-text-animation-rev {
  0% {
    background-size: 300%;
    background-position: -9em 1em;
  }
  20% {
    background-size: 57%;
    background-position: 0 1em;
  }
  100% {
    background-size: 57%;
    background-position: 0 0;
  }
}
`
	
