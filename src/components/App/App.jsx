// import { useState } from 'react';
import // AppContainer,
// Container, TitleMain, Title
'./App.styled';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
// import ContactList from '../ContactList';
// import ContactForm from '../ContactForm';
// import Filter from '../Filter';
// import { useGetContactsQuery } from '../../redux/contacs/contactsSlice';
// import { ThreeCircles } from 'react-loader-spinner';
import { Routes, Route } from 'react-router-dom';

import AppBar from 'components/AppBar/AppBar';
import Home from 'pages/Home';
import Contacts from 'pages/Contacts';
import Login from 'pages/Login';
import Register from 'pages/Register';

// import { lazy } from 'react';
// const AppBar = lazy(() => import('components/AppBar'));
// const Home = lazy(() => import('pages/Home'));
// const Contacts = lazy(() => import('pages/Contacts'));
// const Login = lazy(() => import('pages/Login'));
// const Register = lazy(() => import('pages/Register'));

export const App = () => {
	return (
		<>
			<ToastContainer
				position="top-center"
				autoClose={5000}
				theme="dark"
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<Routes>
				<Route path="/" element={<AppBar />}>
					<Route index element={<Home />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="/contacts" element={<Contacts />} />
				</Route>
			</Routes>
		</>
	);
};
// export const App = () => {
// 	const [filter, setFilter] = useState('');
// 	const { data, isFetching } = useGetContactsQuery();

// 	const changeFilter = event => {
// 		setFilter(event.currentTarget.value);
// 	};

// const isVisibleContacts = () => {
// 	const normalizeFilter = filter.toLowerCase();

// 	if (data) {
// 		if (data.length !== 0) {
// 			return data.filter(contact =>
// 				contact.name.toLowerCase().includes(normalizeFilter)
// 			);
// 		}
// 	}
// 	return;
// };

// 	return (
// 		<AppContainer>
// 			<ToastContainer
// 				position="top-center"
// 				autoClose={5000}
// 				theme="dark"
// 				hideProgressBar={false}
// 				newestOnTop={false}
// 				closeOnClick
// 				rtl={false}
// 				pauseOnFocusLoss
// 				draggable
// 				pauseOnHover
// 			/>
// <Container>
// 	<TitleMain>Phonebook</TitleMain>
// 	<ContactForm />
// </Container>
// <Container>
// 	<Title>Contacts</Title>
// 	{isFetching && <ThreeCircles color="var(--color-button)" />}
// 	<Filter filter={filter} onChange={changeFilter} />
// 	<ContactList contacts={isVisibleContacts()} />
// </Container>
// 		</AppContainer>
// 	);
// };
