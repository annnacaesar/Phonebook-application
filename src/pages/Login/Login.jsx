import {
	Formik,
	// Form, Field, ErrorMessage
} from 'formik';
import {
	Input,
	InputContainer,
	ButtonSubmit,
	FormStyled,
	Error,
} from './Login.styled';

const initialValues = {
	email: '',
	password: '',
};

const Login = () => {
	const handleSubmit = (values, { resetForm }) => {
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

					<ButtonSubmit type="submit">УВІЙТИ</ButtonSubmit>
				</FormStyled>
			)}
		</Formik>
	);
};
export default Login;
