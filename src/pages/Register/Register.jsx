import {
	Formik,
	// Form, Field, ErrorMessage
} from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperation';
import {
	Input,
	InputContainer,
	ButtonSubmit,
	FormStyled,
	Error,
} from './Register.styled';

const initialValues = {
	name: '',
	email: '',
	password: '',
};

const Register = () => {
	const dispatch = useDispatch();
	const handleSubmit = (values, { resetForm }) => {
		const { name, email, password } = values;
		dispatch(register({ name, email, password }));
		// createContact(values);
		resetForm();
	};
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={handleSubmit}
			// validationSchema={schema}
		>
			{({ errors, touched, isValidating }) => (
				<FormStyled>
					<InputContainer>
						<label>
							<Input type="name" name="name" />
							Ім'я
							<Error component="div" name="name" />
						</label>

						<label>
							<Input type="email" name="email" />
							Електронна адреса
							<Error component="div" name="email" />
						</label>

						<label>
							<Input type="password" name="password" />
							Пароль
							<Error component="div" name="password" />
						</label>
					</InputContainer>

					<ButtonSubmit type="submit">ЗАРЕЄСТРУВАТИСЬ</ButtonSubmit>
				</FormStyled>
			)}
		</Formik>
	);
};
export default Register;
