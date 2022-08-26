import { Container } from './Contacts.styled';
import { ThreeCircles } from 'react-loader-spinner';
import ContactForm from 'components/ContactForm';
import { useEffect } from 'react';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import { getIsLoggedIn } from 'redux/auth/authSelectors';

const Contacts = () => {
	const dispatch = useDispatch();
	const isLogIn = useSelector(getIsLoggedIn);
	const isLoadingContacts = useSelector(contactsSelectors.getLoading);

	useEffect(() => {
		if (isLogIn) dispatch(contactsOperations.fetchContacts());
	}, [dispatch, isLogIn]);

	return (
		<>
			<Container>
				<ContactForm />
			</Container>
			<Container>
				{isLoadingContacts && <ThreeCircles />}
				<Filter />
				<ContactList />
				{/* <NoContact>Ви ще не додали жодного контакту😬</NoContact> */}
			</Container>
		</>
	);
};
export default Contacts;
