import { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/authOperation';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import { Suspense } from 'react';
import { InfinitySpin } from 'react-loader-spinner';

import { lazy } from 'react';
const AppBar = lazy(() => import('components/AppBar/AppBar'));
const Home = lazy(() => import('pages/Home/Home.jsx'));
const Contacts = lazy(() => import('pages/Contacts/Contacts.jsx'));
const Login = lazy(() => import('pages/Login/Login.jsx'));
const Register = lazy(() => import('pages/Register/Register.jsx'));

export const App = () => {
	const dispatch = useDispatch();
	const isLoggedIn = useSelector(getIsLoggedIn);
	console.log(isLoggedIn);

	useEffect(() => {
		dispatch(fetchCurrentUser());
	}, [dispatch]);

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
			<Suspense fallback={<InfinitySpin />}>
				<Routes>
					<Route path="/" element={<AppBar />}>
						<Route index element={<Home />} />
						<Route path="/register" element={<Register />} />
						<Route path="/login" element={<Login />} />
						<Route
							path="/contacts"
							element={
								isLoggedIn ? (
									<Contacts />
								) : (
									<Navigate to="/login" replace />
								)
							}
						/>
					</Route>
				</Routes>
			</Suspense>
		</>
	);
};
