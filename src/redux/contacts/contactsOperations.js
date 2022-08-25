// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { deleteContactsApi } from 'services/api-contact';
import { addContactApi } from 'services/api-contact';
import { fetchContactsApi } from 'services/api-contact';
import {
	addContactRequest,
	addContactSuccess,
	addContactError,
	deleteContactRequest,
	deleteContactSuccess,
	deleteContactError,
	// toggleCompletedRequest,
	// toggleCompletedSuccess,
	// toggleCompletedError,
	fetchContactsRequest,
	fetchContactsSuccess,
	fetchContactsError,
} from './contactsActions';

// export const fetchContacts = createAsyncThunk('/contacts', async () => {
// 	try {
// 		const contacts = await fetchContactsApi();
// 		return contacts;
// 	} catch (error) {
// 		console.log(error.message);
// 	}
// });

// export const addContact = createAsyncThunk('/contacts', async contact => {
// 	try {
// 		const contacts = await addContactApi(contact);
// 		return contacts;
// 	} catch (error) {
// 		console.log(error.message);
// 	}
// });

// export const deleteContact = createAsyncThunk('/contacts', async contactId => {
// 	try {
// 		const contacts = await deleteContactsApi(contactId);
// 		return contacts;
// 	} catch (error) {
// 		console.log(error.message);
// 	}
// });
const fetchContacts = () => async dispatch => {
	dispatch(fetchContactsRequest());

	try {
		const contacts = await fetchContactsApi();
		dispatch(fetchContactsSuccess(contacts));
	} catch (error) {
		dispatch(fetchContactsError(error.message));
	}
};

const addContact = contact => async dispatch => {
	dispatch(addContactRequest(contact));

	try {
		const contacts = await addContactApi(contact);
		dispatch(addContactSuccess(contacts));
	} catch (error) {
		dispatch(addContactError(error.message));
		// console.log(error.response.data.message);
		toast(`Будь ласка авторизуйтесь`);
	}
};

const deleteContact = contactId => async dispatch => {
	dispatch(deleteContactRequest());

	try {
		await deleteContactsApi(contactId);
		dispatch(deleteContactSuccess(contactId));
	} catch (error) {
		dispatch(deleteContactError(error.message));
	}
	// axios
	// 	.delete(`/contacts/${contactId}`)
	// 	.then(() => dispatch(deleteContactSuccess(contactId)))
	// 	.catch(error => dispatch(deleteContactError(error.message)));
};

// PATCH @ /tasks/:id
// const toggleCompleted =
// 	({ id, completed }) =>
// 	dispatch => {
// 		const update = { completed };

// 		dispatch(toggleCompletedRequest());

// 		axios
// 			.patch(`/contacts/${id}`, update)
// 			.then(({ data }) => dispatch(toggleCompletedSuccess(data)))
// 			.catch(error => dispatch(toggleCompletedError(error.message)));
// 	};

const contactsOperations = {
	fetchContacts,
	addContact,
	deleteContact,
	// toggleCompleted,
};
export default contactsOperations;
