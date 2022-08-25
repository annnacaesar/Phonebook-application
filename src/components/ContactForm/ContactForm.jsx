import { Formik } from 'formik';
import { toast } from 'react-toastify';
import {
	Input,
	InputContainer,
	ButtonSubmit,
	FormStyled,
	Error,
} from './ContactForm.styled';
import { schema } from 'helpers/validation-yup';
// import {
// 	useGetContactsQuery,
// 	useCreateContactMutation,
// } from '../../redux/contacs/contactsSlice';
// import { fetchContactsApi } from 'services/api-contact';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
import { contactsSelectors } from 'redux/contacts';

const initialValues = {
	name: '',
	number: '',
};

const ContactForm = () => {
	// const [createContact, { isLoading }] = useCreateContactMutation();
	// const { data } = useGetContactsQuery();
	const dispatch = useDispatch();
	const contacts = useSelector(contactsSelectors.getAllContacts);
	// const { data } = fetchContactsApi();

	const handleSubmit = (values, { resetForm }) => {
		console.log(values);
		const findContact = contacts.find(contact =>
			contact.name.toLowerCase().includes(values.name.toLowerCase())
		);
		findContact
			? toast.info(`${values.name} is already in contact`)
			: dispatch(contactsOperations.addContact(values));
		// : createContact(values);
		resetForm();
	};

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={handleSubmit}
			validationSchema={schema}
		>
			{({ errors, touched, isValidating }) => (
				<FormStyled>
					<InputContainer>
						<label>
							<Input type="text" name="name" />
							Ім'я
							<Error component="div" name="name" />
						</label>

						<label>
							<Input type="tel" name="number" />
							Номер телефону
							<Error component="div" name="number" />
						</label>
					</InputContainer>

					<ButtonSubmit type="submit">ДОДАТИ КОНТАКТ</ButtonSubmit>
				</FormStyled>
			)}
		</Formik>
	);
};

export default ContactForm;
