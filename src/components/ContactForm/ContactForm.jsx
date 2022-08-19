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
import {
	useGetContactsQuery,
	useCreateContactMutation,
} from '../../redux/contacs/contactsSlice';

const initialValues = {
	name: '',
	number: '',
};

const ContactForm = () => {
	const [createContact, { isLoading }] = useCreateContactMutation();
	const { data } = useGetContactsQuery();

	const handleSubmit = (values, { resetForm }) => {
		const findContact = data.find(contact =>
			contact.name.toLowerCase().includes(values.name.toLowerCase())
		);
		findContact
			? toast.info(`${values.name} is already in contact`)
			: createContact(values);
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

					<ButtonSubmit type="submit" disabled={isLoading}>
						ДОДАТИ КОНТАКТ
					</ButtonSubmit>
				</FormStyled>
			)}
		</Formik>
	);
};

export default ContactForm;
