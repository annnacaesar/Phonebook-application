import { NavLinkStyled } from 'components/AppBar/AppBar.styled';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelectors';

const Navigation = () => {
	const isLoggedIn = useSelector(getIsLoggedIn);
	return (
		<>
			<NavLinkStyled to="/">Головна</NavLinkStyled>
			{isLoggedIn && (
				<NavLinkStyled to="/contacts">Контакти</NavLinkStyled>
			)}
		</>
	);
};

export default Navigation;
