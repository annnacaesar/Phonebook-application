import { Item, ButtonClose, Contact } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';

const ContactList = () => {
	const dispatch = useDispatch();
	const contacts = useSelector(contactsSelectors.getVisibleContacts);

	const onDeleteContact = id =>
		dispatch(contactsOperations.deleteContact(id));

	return (
		<ul>
			{contacts &&
				contacts.map(({ id, name, number }) => {
					return (
						<Item key={id}>
							<Contact>
								{name}: {number}
							</Contact>
							<ButtonClose
								type="button"
								onClick={() => onDeleteContact(id)}
							>
								x
							</ButtonClose>
						</Item>
					);
				})}
		</ul>
	);
};

export default ContactList;
