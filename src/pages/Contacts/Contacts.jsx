import {
	// AppContainer,
	Container,
	NoContact,
	// TitleMain,
	// Title,
} from './Contacts.styled';
// import { ThreeCircles } from 'react-loader-spinner';
import ContactForm from 'components/ContactForm';
// import Filter from 'components/Filter';

const Contacts = () => {
	return (
		<>
			<Container>
				{/* <TitleMain>Phonebook</TitleMain> */}
				<ContactForm />
			</Container>
			<Container>
				{/* <Title>Contacts</Title> */}
				{/* {isFetching && <ThreeCircles color="var(--color-button)" />} */}
				{/* <Filter filter={filter} onChange={changeFilter} /> */}
				{/* <ContactList contacts={isVisibleContacts()} /> */}
				<NoContact>Ви ще не додали жодного контакту😬</NoContact>
			</Container>
		</>
	);
};
export default Contacts;
