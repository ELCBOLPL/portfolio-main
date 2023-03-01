import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { motion } from 'framer-motion';

export const Background = styled(motion.div)`
	width: 100%;
	height: 100%;
	background: #f4433666;
	top: 0;
	left: 0;
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 99;
`;

export const ModalWrapper = styled(motion.div)`
	width: clamp(200px, 90vw, 500px);
	height: 75vh;
	/* bottom: 1vh; */

	box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
	background: #fff;
	color: rgba(55, 55,55, 0.8);
	display: flex;
	position: relative;
	overflow: scroll;
	border-radius: 10px;
	z-index: 100;
`;

export const CloseModalButton = styled(MdClose)`
	cursor: pointer;
	position: absolute;
	top: 20px;
	left: 400px;
	width: 52px;
	height: 42px;
	padding: 10;
	z-index: 9;
`;
