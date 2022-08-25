// import { fetchContacts, addContact, deleteContact } from './contactsOperation';
// import storage from 'redux-persist/lib/storage';
// import { createSlice } from '@reduxjs/toolkit';
// import persistReducer from 'redux-persist/es/persistReducer';

// const initialState = {
// 	items: [],
// 	filter: '',
// };

// const contactsSlice = createSlice({
// 	name: 'contacts',
// 	initialState,
// 	extraReducers: {
// 		[fetchContacts.fulfilled](state, action) {
// 			state.items = action.payload.items;
// 		},
// 		[addContact.fulfilled](state, action) {
// 			state.items = [action.payload.items, ...state.items];
// 		},
// 		[deleteContact.fulfilled](state, action) {
// 			state.items = state.items.filter(
// 				contact => contact.id !== action.payload
// 			);
// 		},
// 	},
// });

// // export default authSlice.reducer;

// const persistConfig = {
// 	key: 'contacts',
// 	storage,
// };

// export const contactsReducer = persistReducer(
// 	persistConfig,
// 	contactsSlice.reducer
// );

// // import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// // export const contactsApi = createApi({
// // 	reducerPath: 'contacts',
// // 	baseQuery: fetchBaseQuery({
// // 		baseUrl: 'https://connections-api.herokuapp.com/',
// // 	}),
// // 	tagTypes: ['Contact'],
// // 	endpoints: builder => ({
// // 		getContacts: builder.query({
// // 			query: () => `/contacts`,
// // 			providesTags: ['Contact'],
// // 		}),
// // 		deleteContact: builder.mutation({
// // 			query: contactId => ({
// // 				url: `contacts/${contactId}`,
// // 				method: 'DELETE',
// // 			}),
// // 			invalidatesTags: ['Contact'],
// // 		}),
// // 		createContact: builder.mutation({
// // 			query: ({ name, number }) => ({
// // 				url: '/contacts',
// // 				method: 'POST',
// // 				body: {
// // 					name,
// // 					number,
// // 				},
// // 			}),
// // 			invalidatesTags: ['Contact'],
// // 		}),
// // 	}),
// // });

// // export const {
// // 	useGetContactsQuery,
// // 	useDeleteContactMutation,
// // 	useCreateContactMutation,
// // } = contactsApi;

//______________________________________________

// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { createSlice } from '@reduxjs/toolkit';

// export const contactSlice = createSlice({
// 	name: 'contacts',
// 	initialState: {
// 		items: [],
// 		filter: '',
// 	},
// 	reducers: {
// 		addItem(state, action) {
// 			state.items = [action.payload, ...state.items];
// 		},
// 		deleteItem(state, action) {
// 			state.items = state.items.filter(
// 				contact => contact.id !== action.payload
// 			);
// 		},
// 		filterItems(state, action) {
// 			state.filter = action.payload;
// 		},
// 	},
// });

// export const { addItem, deleteItem, filterItems } = contactSlice.actions;
// // export const contactsReducer = contactSlice.reducer;

// const persistConfig = {
// 	key: 'contacts',
// 	storage,
// 	// whitelist: ['items'],
// };

// export const contactsReducer = persistReducer(
// 	persistConfig,
// 	contactSlice.reducer
// );
