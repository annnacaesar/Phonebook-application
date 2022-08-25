import { register, logOut, logIn, fetchCurrentUser } from './authOperation';
import storage from 'redux-persist/lib/storage';
import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';

const initialState = {
	user: { name: null, email: null },
	token: null,
	isLoggedIn: false,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: {
		[register.fulfilled](state, action) {
			state.user = action.payload.user;
			state.token = action.payload.token;
			state.isLoggedIn = true;
		},
		[logIn.fulfilled](state, action) {
			state.user = action.payload.user;
			state.token = action.payload.token;
			state.isLoggedIn = true;
		},
		[logOut.fulfilled](state, action) {
			// state.contacts = {
			// 	items: [],
			// 	filter: '',
			// 	loading: false,
			// 	error: null,
			// };
			state.user = { name: null, email: null };
			state.token = null;
			state.isLoggedIn = false;
		},
		[fetchCurrentUser.fulfilled](state, action) {
			state.user = action.payload;
			state.isLoggedIn = true;
		},
	},
});

// export default authSlice.reducer;

const persistConfig = {
	key: 'auth',
	storage,
	whitelist: ['token'],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const authApi = createApi({
// 	reducerPath: 'auth',
// 	baseQuery: fetchBaseQuery({
// 		baseUrl: 'https://connections-api.herokuapp.com/',
// 	}),
// 	tagTypes: ['Auth'],
// 	endpoints: builder => ({
// 		register: builder.mutation({
// 			query: ({ name, email, password }) => ({
// 				url: '/users/signup',
// 				method: 'POST',
// 				body: {
// 					name,
// 					email,
// 					password,
// 				},
// 			}),
// 			invalidatesTags: ['Auth'],
// 		}),
// 		logIn: builder.mutation({
// 			query: ({ user, token }) => ({
// 				url: '/users/login',
// 				method: 'POST',
// 				body: {
// 					user,
// 					token,
// 					isLoggedIn: true,
// 				},
// 			}),
// 			invalidatesTags: ['Auth'],
// 		}),
// 		logOut: builder.mutation({
// 			query: ({ user, token }) => ({
// 				url: '/users/logout',
// 				method: 'POST',
// 				body: {
// 					user,
// 					token,
// 					isLoggedIn: false,
// 				},
// 			}),
// 			invalidatesTags: ['Auth'],
// 		}),
// 	}),
// });

// export const { useRegisterMutation, useLogInMutation, useLogOutMutation} = authApi;
