import styled from 'styled-components';







export const Container = styled.div`
	width: 100%;
	max-width: 1300px;
	margin: 0 auto;
	padding: 0 50px;

	@media screen and (max-width: 960px) {
		padding: 0 30px;
	}
`;

export const Section = styled.div`
	color: #fff;
	padding: 160px 0;
`;

export const RainbowText = styled.text`

margin-bottom: 1.4rem;
	font-size: 5rem;
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
	/* @font-face {
    font-family: 'Gain Better';
    src: url('GainBetter.eot');
    src: url('GainBetter.eot?#iefix') format('embedded-opentype'),
         url('GainBetter.woff2') format('woff2'),
         url('GainBetter.woff') format('woff'),
         url('GainBetter.ttf')  format('truetype'),
         url('GainBetter.svg#Gain Better') format('svg');
} */
/* @font-face {
    font-family: 'Somebody Else';
    src: url('SomebodyElse.eot');
    src: url('SomebodyElse.eot?#iefix') format('embedded-opentype'),
         url('SomebodyElse.woff2') format('woff2'),
         url('SomebodyElse.woff') format('woff'),
         url('SomebodyElse.ttf')  format('truetype'),
         url('SomebodyElse.svg#Somebody Else') format('svg');
}
font-family: Somebody Else; */
/* @font-face {
    font-family: 'adventure_scriptregular';
    src: url('adventurescript-webfont.eot');
    src: url('adventurescript-webfont.eot?#iefix') format('embedded-opentype'),
         url('adventurescript-webfont.woff2') format('woff2'),
         url('adventurescript-webfont.woff') format('woff'),
         url('adventurescript-webfont.ttf') format('truetype'),
         url('adventurescript-webfont.svg#adventure_scriptregular') format('svg');
    font-weight: 100;
    font-style: normal;

}
font-family:  adventure_scriptregular;  */
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
	background: #CA4246;
	background-color: #CA4246;
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
	

export const Heading = styled.h1`
	
`;

export const HeadingWedding = styled.h2`
	margin-bottom: 15rem;
	font-size: 1.5rem;
	text-align: center;
	
	font-display: fallback;
    font-weight: normal;
    font-style: normal;

	line-height: 1.1;
	font-weight: 600;
	color: ${({ lightText }) => (lightText ? '#f4433666)' : '#f4433666')};
	`;



export const HeadingHora = styled.h2`

	margin-bottom: 5rem;
	font-size: 2rem;
	text-align: center;
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
    font-size: 1.5rem;
  }
	line-height: 1.1;
	font-weight: 300;
	color: ${({ lightText }) => (lightText ? 'rgba(1,1,1,0.9)' : 'rgba(1,1,1,0.9)')};

`;


