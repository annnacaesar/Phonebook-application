import { NavLinkStyled } from 'components/AppBar/AppBar.styled';

const AuthNav = () => {
	return (
		<>
			<NavLinkStyled to="/register">Реєстрація</NavLinkStyled>
			<NavLinkStyled to="/login">Увійти</NavLinkStyled>
		</>
	);
};

export default AuthNav;
