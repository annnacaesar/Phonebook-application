import styled from 'styled-components';
import img from '../../images/book.jpg';

export const ContainerStyled = styled.div`
	width: 100%;
	height: 90vh;
	display: flex;
	justify-content: center;
	background-image: url(${img});
	background-repeat: no-repeat;
	background-size: 100%;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 440px;
	&:not(:last-child) {
		margin-right: 5px;
	}
`;

export const TitleMain = styled.h1`
	text-align: center;
	font-size: 72px;
`;

export const NoContact = styled.div`
	text-align: center;
	font-size: 28px;
`;
