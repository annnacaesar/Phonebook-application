import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AppContainer = styled.div`
	margin: 0 auto;
	max-width: 1200px;
	min-height: 100vh;
	font-size: 40px;
	background-color: #f6f6f6;
`;
export const NavContainer = styled.div`
	border-bottom: var(--border);
	display: flex;
	justify-content: end;
	border-bottom: 1px solid #eeecec;
`;

export const BodyContainer = styled.div`
	border-bottom: var(--border);
	display: flex;
	justify-content: center;
`;

export const NavLinkStyled = styled(NavLink)`
	margin-right: 20px;
	font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
	font-weight: 400;
	font-size: 1.3rem;
	line-height: 1.334;
	letter-spacing: 0em;
	&.active {
		color: var(--color-button);
	}
`;
