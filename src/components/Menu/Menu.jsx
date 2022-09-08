// import { NavLinkStyled } from "components/AppBar/AppBar.styled";
import AuthNav from "components/AuthNav";
import Navigation from "components/Navigation";
import UserMenu from "components/UserMenu";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "redux/auth/authSelectors";
import { StyledBurger, StyledMenu } from "./Menu.styled"

export const Menu = ({ open }) => {
	const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <StyledMenu open={open}>
			<><Navigation />
				{isLoggedIn ? <UserMenu /> : <AuthNav />}</>
    </StyledMenu>
  )
}

export const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

// const useOnClickOutside = (ref, handler) => {
//   React.useEffect(() => {
//     const listener = event => {
//       if (!ref.current || ref.current.contains(event.target)) {
//         return;
//       }
//       handler(event);
//     };
//     document.addEventListener('mousedown', listener);

//     return () => {
//       document.removeEventListener('mousedown', listener);
//     };
//   },
//   [ref, handler],
//   );
// };