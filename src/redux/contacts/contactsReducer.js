import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
	addContactRequest,
	addContactSuccess,
	addContactError,
	deleteContactRequest,
	deleteContactSuccess,
	deleteContactError,
	changeFilter,
	// toggleCompletedRequest,
	// toggleCompletedSuccess,
	// toggleCompletedError,
	fetchContactsRequest,
	fetchContactsSuccess,
	fetchContactsError,
} from './contactsActions';

const items = createReducer([], {
	[fetchContactsSuccess]: (_, { payload }) => payload,
	[addContactSuccess]: (state, { payload }) => [payload, ...state],
	[deleteContactSuccess]: (state, { payload }) =>
		state.filter(({ id }) => id !== payload),
	// [toggleCompletedSuccess]: (state, { payload }) =>
	// 	state.map(contact => (contact.id === payload.id ? payload : contact)),
});

const loading = createReducer(false, {
	[fetchContactsRequest]: () => true,
	[fetchContactsSuccess]: () => false,
	[fetchContactsError]: () => false,
	[addContactRequest]: () => true,
	[addContactSuccess]: () => false,
	[addContactError]: () => false,
	[deleteContactRequest]: () => true,
	[deleteContactSuccess]: () => false,
	[deleteContactError]: () => false,
	// [toggleCompletedRequest]: () => true,
	// [toggleCompletedSuccess]: () => false,
	// [toggleCompletedError]: () => false,
});

const filter = createReducer('', {
	[changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {});

export default combineReducers({
	items,
	filter,
	loading,
	error,
});

// import {
// 	createReducer,
// 	combineReducers,
// 	// createSlice,
// } from '@reduxjs/toolkit';
// import { fetchContacts } from './contactsOperation';

// const items = createReducer([], {
// 	[fetchContacts.fulfilled]: (_, action) => action.payload,
// });

// const isLoading = createReducer(false, {
// 	[fetchContacts.pending]: () => true,
// 	[fetchContacts.fulfilled]: () => false,
// 	[fetchContacts.rejected]: () => false,
// });

// const error = createReducer(null, {
// 	[fetchContacts.rejected]: (_, action) => action.payload,
// 	[fetchContacts.pending]: () => null,
// });

// export default combineReducers({
// 	items,
// 	isLoading,
// 	error,
// });

//------------------------

// export const contactSlice = createSlice({
// 	name: 'contacts',
// 	initialState: {
// 		items: [],
// 		isLoading: false,
// 		error: null,
// 	},
// 	extraReducers: {
// 		[fetchContacts.fulfilled]: (state, action) => {
// 			return (state.items = [action.payload, ...state.items]);
// 		},
// 		// {
// 		// 	return {
// 		// 		...state,
// 		// 		items: action.payload,
// 		// 	};
// 		// },
// 		[fetchContacts.pending]: state => ({ ...state, isLoading: true }),
// 		[fetchContacts.fulfilled]: state => ({ ...state, isLoading: false }),
// 		[fetchContacts.rejected]: state => ({ ...state, isLoading: false }),
// 		[fetchContacts.rejected]: (state, action) => ({
// 			...state,
// 			error: action.payload,
// 		}),
// 		[fetchContacts.pending]: state => ({ ...state, error: null }),
// 	},
// });

// export default contactSlice.reducer;
