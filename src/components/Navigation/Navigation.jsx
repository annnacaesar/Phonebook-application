import { NavLinkStyled } from 'components/AppBar/AppBar.styled';

const Navigation = () => {
	return (
		<>
			<NavLinkStyled to="/">Головна</NavLinkStyled>
			<NavLinkStyled to="/contacts">Контакти</NavLinkStyled>
		</>
	);
};

export default Navigation;
