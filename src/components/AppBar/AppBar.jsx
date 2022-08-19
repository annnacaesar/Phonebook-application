// import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router';
import { Suspense } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import {
	NavContainer,
	AppContainer,
	BodyContainer,
	NavLinkStyled,
} from './AppBar.styled';

export const AppBar = () => {
	return (
		<AppContainer>
			<NavContainer>
				<NavLinkStyled to="/">Головна</NavLinkStyled>
				<NavLinkStyled to="/contacts">Контакти</NavLinkStyled>
				<NavLinkStyled to="/register">Реєстрація</NavLinkStyled>
				<NavLinkStyled to="/login">Увійти</NavLinkStyled>
			</NavContainer>
			<BodyContainer>
				<Suspense
					fallback={<InfinitySpin width="300" color="#d16ba5" />}
				>
					<Outlet />
				</Suspense>
			</BodyContainer>
		</AppContainer>
	);
};

export default AppBar;
