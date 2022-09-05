import styled from 'styled-components';
import img from '../../images/background-image.jpg';

export const ContainerHome = styled.div`
	position: relative;
	width: 100%;
	height: 90vh;
	background-image: url(${img});
	background-repeat: no-repeat;
	background-size: 75%;
`;

export const Title = styled.h1`
	position: absolute;
	right: 20px;
	top: 50%;                         
  transform: translate(0, -50%) }
	font-family: 'DynaPuff', cursive;
	font-size: 90px;
`;

export const TitleFirst = styled.span`
	margin-left: 30px;
`;
export const TitleLast = styled.span`
	margin-left: 80px;
`;
