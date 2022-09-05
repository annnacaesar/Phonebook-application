import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
	fetchLogIn,
	fetchLogOut,
	fetchSignUp,
	token,
} from 'services/api-auth';

export const register = createAsyncThunk('auth/register', async credentials => {
	console.log(credentials);
	try {
		const { data } = await fetchSignUp(credentials);
		token.set(data.token);
		return data;
	} catch (error) {
		console.log(error.message);
	}
});

export const logIn = createAsyncThunk('auth/login', async credentials => {
	try {
		console.log(credentials);
		const data = await fetchLogIn(credentials);
		token.set(data.token);
		return data;
	} catch (error) {
		console.log(error.message);
	}
});
export const logOut = createAsyncThunk('auth/logout', async () => {
	try {
		const data = await fetchLogOut();
		token.unset();
		return data;
	} catch (error) {
		console.log(error.message);
	}
});

export const fetchCurrentUser = createAsyncThunk(
	'auth/refresh',
	async (_, thunkAPI) => {
		const state = thunkAPI.getState();
		const persistedToken = state.auth.token;

		if (persistedToken === null) {
			return thunkAPI.rejectWithValue();
		}

		token.set(persistedToken);
		try {
			const { data } = await axios.get('/users/current');
			return data;
		} catch (error) {
			console.log(error);
		}
	}
);
