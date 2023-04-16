import styled from 'styled-components';
import { Section } from '../../globalStyles';
import { motion } from 'framer-motion';
import images1 from "../../assets/sibelly7.jpg"



export const HeroSection = styled(Section)`
   /* background-image: linear-gradient(to top right, #450b7c, #563cc9, #49e9fb); */
   /* background-image: conic-gradient( #CA4246 16.666%, #E16541 16.666%, #E16541 33.333%, #F18F43 33.333%, #F18F43 50%, #8B9862 50%, #8B9862 66.666%, #476098 66.666%, #476098 83.333%, #A7489B 83.333%); */
	/* background-image: url(${images1}) !important; */
	/* background: url(CARROUSEL.png) center; */
	/* background-size: cover; */
	/* background-attachment: fixed; */
	z-index: 11;
	align-items: center;
	height: 640px;
	position: relative;
	display: flex;

	@media screen and (min-width: 768px) {
		height: 592px;
	}

	@media screen and (min-width: 992px) {
		height: 710px;
	}

	@media screen and (min-width: 1200px) {
		height: 820px;
	}

	@media screen and (min-width: 2000px) {
		height: 1200px;
	}
`;

export const HeroImage = styled.img`
	z-index: 10;
	width: 100%;
	position: absolute;
	left: 0;
	object-fit: cover;

	&.pattern {
		height: 100%;
		max-height: 100%;
		top: 0;
	}

	&.guy {
		bottom: 0;
	}
`;

export const ImageCharacter = styled(motion.img)`
	z-index: 11;
	width: 100%;
	position: absolute;
	width: clamp(90px, 15vw, 200px);
	left: auto;

	&.one {
		top: 4rem;
		right: 200px;
		width: clamp(170px, 15vw, 230px);

		@media screen and (max-width: 768px) {
			right: 50%;
			transform: translateX(50%);
		}
	}

	&.two {
		bottom: 4rem;
		right: 200px;
		z-index: 100;
		@media screen and (max-width: 768px) {
			right: 50px;
		}
	}

	&.three {
		top: 3rem;
		left: 150px;

		@media screen and (max-width: 768px) {
			display: none;
		}
	}
`;

export const CharacterContainer = styled.div`
	width: 100%;
	max-width: 1300px;
	height: 100%;
	left: 50%;
	transform: translateX(-50%);
	position: absolute;
`;

export const HeroContent = styled.div`
	width: 100%;
	padding: 0 15px;
	z-index: 10;
	position: relative;
	
`;

export const Heading = styled.h1`
	margin-bottom: 1.5rem;
	font-size: clamp(2.8rem, 6vw, 6.7rem);
	line-height: 1.1;
	font-weight: 300;
	text-align: center;
	color: white;
`;

export const HeroText = styled.div`
	text-align: center;
	font-size: clamp(0.9rem, 1.5vw, 1.3rem);
	background-color: rgba(255, 255, 255);
	/* margin-bottom: 1.3rem; */
`;

export const ButtonContainer = styled.div`
	position: relative;
	display: flex;
	height: 170px;
`;

export const ButtonWrapper = styled.div`
	position: absolute;
	height: 100vh;
	width: 100%;
	left: 0;
	top: 0;
`;

export const HeroButton = styled.a`
	position: absolute;
	width: 150px;
	margin: 0 auto;
	padding: 16px 40px;
	bottom: calc(100vh - 100px);
	right: 50%;
	transform: translate(50%);
	font-weight: 700;
	font-size: 0.688rem;
	line-height: 18px;
	letter-spacing: 1.54px;
	text-transform: uppercase;
	border-radius: 6px;
	border: none;
	background-color: #ef265a;
	color: #fff;
	cursor: pointer;
	transition: border-color .3s cubic-bezier(.215,.61,.355,1),color .3s cubic-bezier(.165,.84,.44,1),transform .3s cubic-bezier(.165,.84,.44,1),background-color .3s cubic-bezier(.165,.84,.44,1);


	&.corner {
		position: fixed;
		bottom: 3rem;
		right: 3rem;
		width: 64px;
		height: 64px;
		padding: 10px;
		background-color: #ef4b6c;
		border-radius: 50%;
	}

	&:hover {
	    box-shadow: 0 0 9px 9px #5238b1; 
		background-color: #3898ec;
    	border-color: #ef265a;
    	/* transform: translateY(2px) */
	}
`;
