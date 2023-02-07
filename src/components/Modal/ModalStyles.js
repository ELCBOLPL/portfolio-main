import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { motion } from 'framer-motion';

export const Background = styled(motion.div)`
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.8);
	top: 0;
	left: 0;
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 99;
`;

export const ModalWrapper = styled(motion.div)`
	width: 470px;
	height: 545px;
	box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
	background: #fff;
	color: #000;
	display: flex;
	position: relative;
	overflow: scroll;
	border-radius: 10px;
	z-index: 100;
`;

export const CloseModalButton = styled(MdClose)`
	cursor: pointer;
	position: absolute;
	background-color: transparent;
	top: 0px;
	right: 30px;
	width: 32px;
	height: 42px;
	padding: 0;
	z-index: 10;
`;


