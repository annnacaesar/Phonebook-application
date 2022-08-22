import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
// import contactsReducer from './contacs/contactsReducer';
import { contactsApi } from './contacs/contactsSlice';
import { contactsReducer } from './contactSlice';
import authReducer from './auth/authSlice';
// import persistStore from 'redux-persist/lib/persistStore';
import {
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';

const middleware = [
	...getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		},
	}),
];

const authPersistConfig = {
	key: 'auth',
	storage,
	whitelist: ['token'],
};

export const store = configureStore({
	reducer: {
		auth: persistReducer(authPersistConfig, authReducer),
		contacts: contactsReducer,
		[contactsApi.reducerPath]: contactsApi.reducer,
	},
	middleware,
});

export const persistor = persistStore(store);

// import { persistStore } from 'redux-persist';
// import { contactSlice } from './contactSlice';

// export const store = configureStore({
// 	reducer: {
// 		contacts: contactSlice.reducer,
// 	},
// });

// const addContact = contact => {
// 	return {
// 		type: 'addContact',
// 		payload: contact,
// 	};
// };

// const addAsyncContact = contact => {
// 	return {
// 		type: 'addContact',
// 		payload: fetch('/contact'),
// 	};
// };

// const reducer = (state, action) => [...state, ...action.payload];

// const addContactOperation = contact => dispatch => {
// 	const user = fetch('/contact');
// 	dispatch(addContact(user));
// };

// export const persistor = persistStore(store);
