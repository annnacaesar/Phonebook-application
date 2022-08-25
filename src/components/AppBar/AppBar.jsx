// import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router';
import { Suspense } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import {
	NavContainer,
	AppContainer,
	BodyContainer,
	// NavLinkStyled,
} from './AppBar.styled';
import Navigation from 'components/Navigation';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';
import { useSelector } from 'react-redux';

export const AppBar = () => {
	const isLoggedIn = useSelector(getIsLoggedIn);
	return (
		<AppContainer>
			<NavContainer>
				<Navigation />
				{isLoggedIn ? <UserMenu /> : <AuthNav />}
			</NavContainer>
			<BodyContainer>
				<Suspense fallback={<InfinitySpin />}>
					<Outlet />
				</Suspense>
			</BodyContainer>
		</AppContainer>
	);
};

export default AppBar;
