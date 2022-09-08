import { Outlet } from 'react-router';
import { Suspense, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { NavContainer, AppContainer, BodyContainer } from './AppBar.styled';
// import Navigation from 'components/Navigation';
// import { getIsLoggedIn } from 'redux/auth/authSelectors';
// import UserMenu from 'components/UserMenu';
// import AuthNav from 'components/AuthNav';
// import { useSelector } from 'react-redux';
// import { Menu } from 'components/Menu/Menu';
import { Burger, Menu } from 'components/Menu/Menu';

export const AppBar = () => {
	const [open, setOpen] = useState(false);
	// const [screenWidth, setScreenWidth] = useState(window.screen.width)
	// const isLoggedIn = useSelector(getIsLoggedIn);
	
	
	// console.log(screenWidth);
	return (
		<AppContainer>
			<NavContainer>
				{/* {screenWidth < 481 ?       (<><Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} /></>
        
      ) : */}
			{/* (<><Navigation />
				{isLoggedIn ? <UserMenu /> : <AuthNav />}</>)  */}
				<Burger open={open} setOpen={setOpen}/>
				<Menu open={open} setOpen={setOpen} />
			</NavContainer>
			<BodyContainer>
				<Suspense
					fallback={<InfinitySpin width="100" color="#132b13" />}
				>
					<Outlet />
				</Suspense>
			</BodyContainer>
		</AppContainer>
	);
};

export default AppBar;
