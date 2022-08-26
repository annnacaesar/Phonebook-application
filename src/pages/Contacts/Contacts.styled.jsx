import styled from 'styled-components';
import img from '../../images/brando-makes-branding-PjhOkwN0ruY-unsplash.jpg';
// import img from '../../images/mediamodifier-OhVnADTC7rY-unsplash.jpg';
// import img from '../../images/rhema-kallianpur-2W3bDp7K1oQ-unsplash.jpg';

// export const AppContainer = styled.div`
// 	box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
// 	display: flex;
// 	min-height: 100vh;

// 	justify-content: center;
// 	font-size: 40px;
// 	color: var(--color);
// `;
// export const ContainerContacts = styled.div`
// /*  */
// 	display: flex;
// 	background-image: url(${img});
// 	background-repeat: no-repeat;
// 	background-size: 100%;
// `;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	/* padding: 15px; */
	width: 440px;
	/* box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25); */
	/* background-color: var(--background-color); */
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
