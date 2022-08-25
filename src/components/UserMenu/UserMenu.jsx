import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperation';
import { getUserName } from 'redux/auth/authSelectors';
// import { logOut } from '../../redux/auth/authOperation';
import defaultAvatar from './default-avatar.png';
import { Name } from './UserMenu.styled';
import { Avatar } from './UserMenu.styled';
import { UserContainer } from './UserMenu.styled';

export const UserMenu = () => {
	const dispatch = useDispatch();
	const name = useSelector(getUserName);
	console.log(name);
	const avatar = defaultAvatar;

	return (
		<UserContainer>
			<Avatar src={avatar} alt="" width="32" />
			<Name>Ласкаво просимо, {name}</Name>
			<button type="button" onClick={() => dispatch(logOut())}>
				Вийти
			</button>
		</UserContainer>
	);
};

export default UserMenu;
