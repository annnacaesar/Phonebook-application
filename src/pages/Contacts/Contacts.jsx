import {
	// AppContainer,
	Container,
	// NoContact,
	// TitleMain,
	// Title,
} from './Contacts.styled';
import { ThreeCircles } from 'react-loader-spinner';
import ContactForm from 'components/ContactForm';
import {
	useEffect,
	// useState
} from 'react';
// import { fetchContactsApi } from 'services/api-contact';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';

// const initialState = [
// 	{
// 		name: 'Anna',
// 		number: '06800987675',
// 		id: 1,
// 	},
// 	{
// 		name: 'Inna',
// 		number: '06800987675',
// 		id: 12,
// 	},
// 	{
// 		name: 'Tanya',
// 		number: '06800987675',
// 		id: 13,
// 	},
// ];

const Contacts = () => {
	// const dispatch = useDispatch();
	// const contacts = useSelector(contactsSelectors.getAllContacts);
	// console.log(contacts);
	// // const [contacts, setContacts] = useState([]);
	// // const [contacts, setContacts] = useState(initialState);
	// const [filterWord, setFilterWord] = useState('');

	// useEffect(() => {
	// 	dispatch(contactsOperations.fetchContacts);
	// }, [dispatch]);

	// // useEffect(() => {
	// // 	fetchContactsApi().then(setContacts);
	// // }, []);

	// const isVisibleContacts = () => {
	// 	const normalizeFilter = filterWord.toLowerCase();

	// 	if (contacts) {
	// 		if (contacts.length !== 0) {
	// 			return contacts.filter(contact =>
	// 				contact.name.toLowerCase().includes(normalizeFilter)
	// 			);
	// 		}
	// 	}
	// 	return;
	// };

	// const changeFilter = event => {
	// 	setFilterWord(event.currentTarget.value.toLowerCase());
	// 	// isVisibleContacts();
	// };

	const dispatch = useDispatch();
	const isLoadingContacts = useSelector(contactsSelectors.getLoading);

	// const [isModalOpen, setIsModalOpen] = useState(false);
	// const toggleModal = () => setIsModalOpen(state => !state);

	useEffect(() => {
		function handleFetchContacts() {
			dispatch(contactsOperations.fetchContacts());
		}
		handleFetchContacts();
	}, [dispatch]);
	// useEffect(() => {
	// 	first

	// 	return () => {
	// 		second
	// 	}
	// }, [third])

	return (
		<>
			<Container>
				{/* <TitleMain>Phonebook</TitleMain> */}
				<ContactForm />
			</Container>
			<Container>
				{/* <TitleMain>Контакти</TitleMain> */}
				{/* {isFetching && <ThreeCircles color="var(--color-button)" />} */}
				{/* {contacts.length !== 0 ? ( */}
				{/* <> */}
				{/* <Filter filter={filterWord} onChange={changeFilter} /> */}
				{isLoadingContacts && <ThreeCircles />}
				<Filter />
				<ContactList />
				{/* <ContactList contacts={isVisibleContacts()} /> */}
				{/* </> */}
				{/* // ) : (
				// 	<NoContact>Ви ще не додали жодного контакту😬</NoContact>
				// )} */}
			</Container>
		</>
	);
};
export default Contacts;
