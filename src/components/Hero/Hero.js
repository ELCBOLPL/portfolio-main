import React, { useEffect, useState } from 'react';
import { FiMail} from 'react-icons/fi';
import {
	HeroSection,
	HeroText,
	ButtonContainer,
	HeroButton,
	ImageCharacter,
	// HeroImage,
	HeroContent,
	ButtonWrapper,
	CharacterContainer,
} from './HeroStyles';
import { useInView } from 'react-intersection-observer';
import Modal from '../Modal/Modal';
import { SectionHeading, SectionTitle } from '../styles/SectionHeading';
// import image1 from "../../assets/hero-pattern-bg-lg.png";
// import image2 from "../../assets/reuso.png"
// import image3 from "../../assets/tambo3.png"
const Hero = () => {
	
	const [showModal, setShowModal] = useState(false);
	const dragConstraints = { top: 0, bottom: 0, right: 0, left: 0 };

	// const toggleModal = () => {
	// 	if (!showModal) {
	// 		document.body.style.overflow = 'hidden';
	// 	} else {
	// 		document.body.style.overflow = 'visible';
	// 	}

	// 	setShowModal(!showModal);
	// };
	const openModal = ()  => {
		setShowModal(prev => !prev)
	}

	const variants = {
		hover: {
			y: 15,
			transition: {
				yoyo: Infinity,
				duration: 0.6,
			},
		},
	};
	const { ref, inView } = useInView({
		rootMargin: '-100px',
	});

	useEffect(() => {
		console.log(inView);
	}, [inView]);

	return (
		<>
			<HeroSection id="hero">
				{/* <HeroImage className="pattern" src={image1} />
				<HeroImage className="guy" src={image2} /> */}
				<CharacterContainer>
					<ImageCharacter
						dragConstraints={dragConstraints}
						// className="one" src={image3}
					/>
					<ImageCharacter
						dragConstraints={dragConstraints}
						className="two"
						// src={image3}
					/>
					<ImageCharacter
						variants={variants}
						whileHover="hover"
						drag
						dragConstraints={dragConstraints}
						className="three"
						// src={image3}
					/>
				</CharacterContainer>
				<HeroContent>
				
				<SectionHeading><SectionTitle>No olvides enviar mensaje </SectionTitle></SectionHeading>
					<ButtonContainer ref={ref}>
						<ButtonWrapper>
							<HeroButton onClick={openModal}
							className={inView ? '' : 'corner'}>
								{inView ? (
									<> Confirmar Asistencia</>
								) 
								:( 
								<FiMail color="white" size="2.3rem" /> 
								 ) 
								}
							</HeroButton>
						</ButtonWrapper>
					</ButtonContainer>
				</HeroContent>
			</HeroSection>
			<Modal showModal={showModal} setShowModal={setShowModal} />
		</>
	);
};

export default Hero;
