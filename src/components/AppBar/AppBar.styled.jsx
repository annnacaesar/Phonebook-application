import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AppContainer = styled.div`
	min-height: 100vh;
	font-size: 40px;
	color: var(--font-color);
	background-image: var(--background-gradient);
`;
export const NavContainer = styled.div`
	border-bottom: var(--border);
	display: flex;
	justify-content: space-around;
`;

export const BodyContainer = styled.div`
	/* padding: 10px; */
	border-bottom: var(--border);
	display: flex;
	justify-content: center;
`;

export const NavLinkStyled = styled(NavLink)`
	font-size: 28px;
	font-weight: 600;
	&.active {
		color: var(--color-button);
	}
`;
